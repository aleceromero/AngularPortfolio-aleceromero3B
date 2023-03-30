import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-banner-modal',
  templateUrl: './banner-modal.component.html',
  styleUrls: ['./banner-modal.component.css']
})

export class BannerModalComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    // grupo de controles formulario
    this.form = this.formBuilder.group({
      imgBanner:['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  // metodos para el formulario
  get ImgBanner(){
    return this.form.get("imgBanner");
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
