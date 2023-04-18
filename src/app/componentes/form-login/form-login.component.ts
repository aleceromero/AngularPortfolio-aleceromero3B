import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})

export class FormLoginComponent implements OnInit {

  form: FormGroup;

  constructor( private formBuilder: FormBuilder, private router: Router, 
               private activatedRoute: ActivatedRoute) { 
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
      alert("a ingresado correctamente!")
      this.router.navigate(['']);
    } else {
    // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
  }

}
