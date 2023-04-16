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
      id:[''],
      nombreCompleto:['', [Validators.required]],
      ciudad:['', [Validators.required]],
      pais:['', [Validators.required]],
      emailContacto:['', [Validators.required, Validators.email]],
      imgBanner:['', [Validators.required]],
      imgPerfil:['', [Validators.required]],
      sobreMi:[''],
      edad:[''],
    })
  }

  ngOnInit(): void {
  }

  // metodos para el formulario
  get NombreCompleto(){
    return this.form.get("nombreCompleto");
  }

  get Ciudad(){
    return this.form.get("ciudad");
  }

  get Pais(){
    return this.form.get("pais");
  }

  get EmailContacto(){
    return this.form.get("emailContacto")
  }

  get ImgBanner(){
    return this.form.get("imgBanner");
  }

  get ImgPerfil(){
    return this.form.get("imgPerfil");
  }

  get SobreMi(){
    return this.form.get("sobreMi");
  }

  get Edad(){
    return this.form.get("edad");
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
