import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-exp-modal',
  templateUrl: './agregar-exp-modal.component.html',
  styleUrls: ['./agregar-exp-modal.component.css']
})

export class AgregarExpModalComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    // grupo de controles formulario
    this.form = this.formBuilder.group({
      addPuesto:['', [Validators.required]],
      addFechaInicio:['', [Validators.required]],
      addEmpresa:['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  // metodos para el formulario
  get Puesto(){
    return this.form.get("addPuesto");
  }

  get FechaInicio(){
    return this.form.get("addFechaInicio");
  }

  get Empresa(){
    return this.form.get("addEmpresa");
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
