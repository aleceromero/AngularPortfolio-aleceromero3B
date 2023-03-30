import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-hab-modal',
  templateUrl: './agregar-hab-modal.component.html',
  styleUrls: ['./agregar-hab-modal.component.css']
})

export class AgregarHabModalComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // grupo de controles formulario
    this.form = this.formBuilder.group({
    addHabilidad:['',[Validators.required]],
    addNivel:['',[Validators.required, Validators.maxLength(3)]],
    })
   }

  ngOnInit(): void {
  }

  // metodos para el formulario
  get Habilidad(){
    return this.form.get("addHabilidad");
  }

  get Nivel(){
    return this.form.get("addNivel");
  }

  // metodo validacion Nivel
  getNivelInvalid(){
    return this.Nivel?.touched && this.Nivel?.valid;
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
