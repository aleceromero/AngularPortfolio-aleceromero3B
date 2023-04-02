import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-agregar-proy-modal',
  templateUrl: './agregar-proy-modal.component.html',
  styleUrls: ['./agregar-proy-modal.component.css']
})
export class AgregarProyModalComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    // grupo de controles formulario
    this.form = this.formBuilder.group({
      addProyecto:['', [Validators.required]],
      addImgProyecto:['', [Validators.required]],
      addUrlProyecto:['', [Validators.required]],
    })
  }

  
  ngOnInit(): void {
  }

  // metodos para el formulario
  get Proyecto(){
    return this.form.get("addProyecto");
  }

  get ImgProyecto(){
    return this.form.get("addImgProyecto");
  }

  get UrlProyecto(){
    return this.form.get("addUrlProyecto");
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
