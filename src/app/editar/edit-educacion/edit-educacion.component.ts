import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  form: FormGroup;
  educacion: Educacion = null; //se llama al modelo experiencia

  constructor( private formBuilder: FormBuilder, private eduServ:EducacionService,
               private activatedRoute: ActivatedRoute, private router: Router) { 

    // grupo de controles formulario
    this.form = this.formBuilder.group({
      id:[''],
      titulo: ['',[Validators.required]],
      fechaInicio:['', [Validators.required]],
      fechaFin:[''],
      establecimiento:['', [Validators.required]],
      descripcion:[''],
    })
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.eduServ.findEducacion(id).subscribe(data => {
      this.educacion=data;
    },err =>{
      alert("Error al cargar los datos");
      this.router.navigate(['']);
    })
  }

  // metodos para el formulario
  get Titulo(){
    return this.form.get("titulo");
  }

  get FechaInicio(){
    return this.form.get("fechaInicio");
  }

  get FechaFin(){
    return this.form.get("fechaFin");
  }

  get Establecimiento(){
    return this.form.get("establecimiento");
  }

  get Descripcion(){
    return this.form.get("descripcion")
  }
  

  onUpdate():void{
    this.eduServ.editEducacion(this.form.value).subscribe(data => {
      alert("educacion modificada");
      this.router.navigate(['']);
    });
  }

  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onUpdate();
      alert("educacion modificada");
      this.router.navigate(['']);
    }else{
      alert("fallo la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }


}
