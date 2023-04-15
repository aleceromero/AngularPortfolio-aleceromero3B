import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})

export class EditProyectoComponent implements OnInit {
  form: FormGroup;
  proyecto: Proyecto = null; //se llama al modelo proyecto

  constructor( private formBuilder: FormBuilder, private proyectServ: ProyectoService,
               private activatedRoute: ActivatedRoute, private router: Router) { 
    
    // grupo de controles formulario
    this.form = this.formBuilder.group({
      id:[''],
      proyecto:['', [Validators.required]],
      imgProyecto:['', [Validators.required]],
      urlProyecto:['', [Validators.required]],
      descripcion:[''],
    })
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectServ.findProyecto(id).subscribe(data => {
      this.proyecto=data;
    },err =>{
      alert("error al cargar los datos");
      this.router.navigate(['']);
    })
  }

  // metodos para el formulario
  get Proyecto(){
    return this.form.get("proyecto");
  }

  get ImgProyecto(){
    return this.form.get("imgProyecto");
  }

  get UrlProyecto(){
    return this.form.get("urlProyecto");
  }

  get Descripcion(){
    return this.form.get("descripcion");
  }

  onUpdate():void{
    this.proyectServ.editProyecto(this.form.value).subscribe(data => {});
  }

  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onUpdate();
      alert("proyecto modificado");
      this.router.navigate(['']);
    }else{
      alert("falló la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }

}
