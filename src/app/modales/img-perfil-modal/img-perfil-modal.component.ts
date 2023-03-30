import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-img-perfil-modal',
  templateUrl: './img-perfil-modal.component.html',
  styleUrls: ['./img-perfil-modal.component.css']
})

export class ImgPerfilModalComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    // grupo de controles formulario
    this.form = this.formBuilder.group({
      imgPerfil:['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  // metodos para el formulario
  get ImgPerfil(){
    return this.form.get("imgPerfil");
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
