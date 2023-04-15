import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-edit-habilidad',
  templateUrl: './edit-habilidad.component.html',
  styleUrls: ['./edit-habilidad.component.css']
})

export class EditHabilidadComponent implements OnInit {
  form: FormGroup;
  habilidad: Habilidad = null; //se llama al modelo habilidad

  constructor( private formBuilder: FormBuilder, private habServ: HabilidadService,
               private activatedRoute: ActivatedRoute, private router: Router) { 

    // grupo de controles formulario
    this.form = this.formBuilder.group({
      id:[''],
      habilidad:['',[Validators.required]],
      nivel:['',[Validators.required, Validators.maxLength(3)]],
      descripcion:[''],
    })
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.habServ.findHabilidad(id).subscribe(data => {
      this.habilidad=data;
    },err =>{
      alert("error al cargar los datos");
      this.router.navigate(['']);
    })
  }

  // metodos para el formulario
  get Habilidad(){
    return this.form.get("habilidad");
  }

  get Nivel(){
    return this.form.get("nivel");
  }

  get Descripcion(){
    return this.form.get("descripcion");
  }

  onUpdate():void{
    this.habServ.editHabilidad(this.form.value).subscribe(data => {});
  }

  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onUpdate();
      alert("habilidad modificada")
      this.router.navigate(['']);
    }else{
      alert("falló la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }
  
}
