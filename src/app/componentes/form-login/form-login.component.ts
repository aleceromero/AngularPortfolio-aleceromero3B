import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})

export class FormLoginComponent implements OnInit {

  form: FormGroup;
  personas: Persona[]=[]; 

  constructor( private formBuilder: FormBuilder, private router: Router, private autService: AutenticacionService) { 
    // grupo de controles formulario
    this.form= this.formBuilder.group({
      emailLogin:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]],
    })
  }

  ngOnInit(): void {
  }

  // metodos para el formulario
  get EmailLogin(){
    return this.form.get("emailLogin");
  }

  get Password(){
    return this.form.get("password");
  }

  limpiar(): void{
		this.form.reset();
	}

  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit del form
    event.preventDefault;

    if (this.form.valid){
    // Llamamos a nuestro servicio para enviar los datos al servidor
      this.autService.loginPersona(JSON.stringify(this.form.value)).subscribe(data => {
        console.log("DATA: " + JSON.stringify(data));
      //alert("ha ingresado correctamente!");
      this.router.navigate(['']);
    }, error =>{
      alert("error al inicial sesion");
    })
    } else {
    // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
  }

}
