import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sobre-mi-modal',
  templateUrl: './sobre-mi-modal.component.html',
  styleUrls: ['./sobre-mi-modal.component.css']
})

export class SobreMiModalComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    // grupo de controles formulario
    this.form = this.formBuilder.group({
      nombre:['', [Validators.required]],
      fechaNacimiento:['', [Validators.required]],
      ciudad:['', [Validators.required]],
      emailSobreMi:['', [Validators.required, Validators.email]],
    })
  }

  ngOnInit(): void {
  }

  // metodos para el formulario
  get Nombre(){
    return this.form.get("nombre");
  }

  get FechaNacimiento(){
    return this.form.get("fechaNacimiento");
  }

  get Ciudad(){
    return this.form.get("ciudad");
  }

  get EmailSobreMi(){
    return this.form.get("emailSobreMi");
  }

  // metodo validacion email
  get EmailInvalid() {
    return this.EmailSobreMi?.touched && !this.EmailSobreMi?.valid;
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
