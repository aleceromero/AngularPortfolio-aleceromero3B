import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-experiencia-modal',
  templateUrl: './experiencia-modal.component.html',
  styleUrls: ['./experiencia-modal.component.css']
})

export class ExperienciaModalComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    // grupo de controles formulario
    this.form = this.formBuilder.group({
      Puesto:['', [Validators.required]],
      FechaInicio:['', [Validators.required]],
      Empresa:['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  // metodos para el formulario
  get Puesto(){
    return this.form.get("Puesto");
  }

  get FechaInicio(){
    return this.form.get("FechaInicio");
  }

  get Empresa(){
    return this.form.get("Empresa");
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
