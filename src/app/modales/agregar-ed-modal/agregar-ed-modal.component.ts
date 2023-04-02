import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-ed-modal',
  templateUrl: './agregar-ed-modal.component.html',
  styleUrls: ['./agregar-ed-modal.component.css']
})

export class AgregarEdModalComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    // grupo de controles formulario
    this.form = this.formBuilder.group({
      addTitulo: ['',[Validators.required]],
      addFechaInicioEd:['', [Validators.required]],
      addEstablecimiento:['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  get Titulo(){
    return this.form.get("addTitulo");
  }

  get FechaInicioEd(){
    return this.form.get("addFechaInicioEd");
  }

  get Establecimiento(){
    return this.form.get("addEstablecimiento");
  }

  limpiar(): void{
		this.form.reset();
	}
  
  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit del form
    event.preventDefault;

    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
        alert("Todo salio bien ¡Enviar formuario!")
      } else {
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
        this.form.markAllAsTouched(); 
      }
  }

}
