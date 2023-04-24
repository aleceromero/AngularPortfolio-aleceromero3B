import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-agregar-ed-modal',
  templateUrl: './agregar-ed-modal.component.html',
  styleUrls: ['./agregar-ed-modal.component.css']
})

export class AgregarEdModalComponent implements OnInit {

  form: FormGroup;
  titulo: string = '';
  fechaInicio: string = '';
  fechaFin: string = '';
  establecimiento: string = '';
  descripcion: string = '';

  constructor(private formBuilder: FormBuilder, private eduServ: EducacionService) { 
    // grupo de controles formulario
    this.form = this.formBuilder.group({
      titulo: ['',[Validators.required]],
      fechaInicio:['', [Validators.required]],
      fechaFin:['', [Validators.required]],
      establecimiento:['', [Validators.required]],
      descripcion:[''],
    })
  }

  ngOnInit(): void {
  }

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

  get DescripcionEd(){
    return this.form.get("descripcion")
  }
  
  limpiar(): void{
		this.form.reset();
	}
  
  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit del form
    event.preventDefault;

    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
        this.onCreate();
      } else {
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template 
        alert("Falló la carga, intente nuevamente");    
        this.form.markAllAsTouched(); 
      }
  }

  onCreate(): void {
    const edu = new Educacion(this.titulo, this.fechaInicio, this.fechaFin, this.establecimiento, this.descripcion);
      this.eduServ.saveEducacion(edu).subscribe(data => {})
      window.location.reload();
      alert("educación añadida");
  }

}
