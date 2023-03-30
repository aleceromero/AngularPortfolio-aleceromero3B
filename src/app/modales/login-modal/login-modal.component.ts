import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})

export class LoginModalComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // grupo de controles formulario
    this.form= this.formBuilder.group({
      addEmail:['', [Validators.required, Validators.email]],
      addPassword:['', [Validators.required, Validators.minLength(8)]],
    })
  }

  ngOnInit(): void {
  }

  // metodos para el formulario
  get Email(){
    return this.form.get("addEmail");
  }

  get Password(){
    return this.form.get("addPassword");
  }

  // metodo validacion email
  get EmailInvalid() {
    return this.Email?.touched && !this.Email?.valid;
  }
  // // metodo validacion password
  get PasswordInvalid(){
    return this.Password?.touched && !this.Password?.valid;
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
