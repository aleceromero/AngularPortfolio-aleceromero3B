import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-agregar-hab-modal',
  templateUrl: './agregar-hab-modal.component.html',
  styleUrls: ['./agregar-hab-modal.component.css']
})

export class AgregarHabModalComponent implements OnInit {

  form: FormGroup;
  habilidad: string = '';
  nivel: number = 0;
  descripcion: string = '';

  constructor(private formBuilder: FormBuilder, private habServ:HabilidadService) {
    // grupo de controles formulario
    this.form = this.formBuilder.group({
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
      this.onCreate();
    } else {
    // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template  
    alert("Falló la carga, intente nuevamente");   
      this.form.markAllAsTouched(); 
    }
  }

  onCreate(): void {
    const hab = new Habilidad(this.habilidad, this.nivel, this.descripcion);
      this.habServ.saveHabilidad(hab).subscribe(data => {});
      window.location.reload();
      alert("habilidad añadida");
  }

}
