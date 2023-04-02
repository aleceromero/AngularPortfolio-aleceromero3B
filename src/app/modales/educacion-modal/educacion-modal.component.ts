import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-educacion-modal',
  templateUrl: './educacion-modal.component.html',
  styleUrls: ['./educacion-modal.component.css']
})
export class EducacionModalComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // grupo de controles formulario
    this.form = this.formBuilder.group({
      Titulo: ['',[Validators.required]],
      FechaInicioEd:['', [Validators.required]],
      Establecimiento:['', [Validators.required]],
    })
   }

  ngOnInit(): void {
  }

  get Titulo(){
    return this.form.get("Titulo");
  }

  get FechaInicioEd(){
    return this.form.get("FechaInicioEd");
  }

  get Establecimiento(){
    return this.form.get("Establecimiento");
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
