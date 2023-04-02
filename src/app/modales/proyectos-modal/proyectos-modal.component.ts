import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-proyectos-modal',
  templateUrl: './proyectos-modal.component.html',
  styleUrls: ['./proyectos-modal.component.css']
})

export class ProyectosModalComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // grupo de controles formulario
    this.form = this.formBuilder.group({
      Proyecto:['', [Validators.required]],
      ImgProyecto:['', [Validators.required]],
      UrlProyecto:['', [Validators.required]],
    })
   }

  ngOnInit(): void {
  }

   // metodos para el formulario
   get Proyecto(){
    return this.form.get("Proyecto");
  }

  get ImgProyecto(){
    return this.form.get("ImgProyecto");
  }

  get UrlProyecto(){
    return this.form.get("UrlProyecto");
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
