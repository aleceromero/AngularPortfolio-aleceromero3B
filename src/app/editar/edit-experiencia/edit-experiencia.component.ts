import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  form: FormGroup;
  experiencia: Experiencia = null; //se llama al modelo experiencia

  constructor( private formBuilder: FormBuilder, private expeServ:ExperienciaService, 
               private activatedRoute: ActivatedRoute, private router:Router) {

    // grupo de controles formulario
    this.form = this.formBuilder.group({
      id:[''],
      puesto:['', [Validators.required]],
      fechaInicio:['', [Validators.required]],
      fechaFin:[''],
      empresa:['', [Validators.required]],
      descripcion:[''],
    })
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.expeServ.findExperiencia(id).subscribe(data => {
      this.experiencia=data;
    },err =>{
      alert("Error al cargar los datos");
      this.router.navigate(['']);
    })
  }

  
  // metodos para el formulario
  get Puesto(){
    return this.form.get("puesto");
  }

  get FechaInicio(){
    return this.form.get("fechaInicio");
  }

  get FechaFin(){
    return this.form.get("fechaFin");
  }

  get Empresa(){
    return this.form.get("empresa");
  }

  get Descripcion(){
    return this.form.get("descripcion");
  }


  onUpdate():void{
    this.expeServ.editExperiencia(this.form.value).subscribe(data => {})
  }


  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onUpdate();
      alert("experiencia modificada");
      this.router.navigate(['']);
    }else{
      alert("falló la carga, intente nuevamente");
      this.form.markAllAsTouched();
      
    }
  }

  limpiar(): void{
		this.form.reset();
	}
  
  cerrar(): void{
    alert("desea salir de la edicion");
      this.router.navigate(['']);

  }

}