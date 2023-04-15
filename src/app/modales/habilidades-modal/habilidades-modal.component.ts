import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-habilidades-modal',
  templateUrl: './habilidades-modal.component.html',
  styleUrls: ['./habilidades-modal.component.css']
})

export class HabilidadesModalComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // grupo de controles formulario
    this.form = this.formBuilder.group({
      id:[''],
      habilidad:['',[Validators.required]],
      nivel:['',[Validators.required, Validators.maxLength(3)]],
      descripcion:[''],
      })
   }

  ngOnInit(): void {
  }

  // metodos para el formulario
  get Habilidad(){
    return this.form.get("habilidad");
  }

  get Nivel(){
    return this.form.get("nivel");
  }

  get Descripcion(){
    return this.form.get("descripcion");
  }

  limpiar(): void{
		this.form.reset();
	}

  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del comportamiento submit del form
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
