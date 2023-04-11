import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-agregar-exp-modal',
  templateUrl: './agregar-exp-modal.component.html',
  styleUrls: ['./agregar-exp-modal.component.css']
})

export class AgregarExpModalComponent implements OnInit {

  form: FormGroup;
  puesto: string = '';
  fechaInicio: string ='';
  fechaFin: string='';
  empresa: string='';
  descripcion: string='';

  constructor(private formBuilder: FormBuilder, private expeServ: ExperienciaService) { 
    // grupo de controles formulario
    this.form = this.formBuilder.group({
      addPuesto:['', [Validators.required]],
      addFechaInicio:['', [Validators.required]],
      addFechaFin:[''],
      addEmpresa:['', [Validators.required]],
      addDescripcion:[''],
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

  get FechaFin(){
    return this.form.get("addFechaFin");
  }

  get Empresa(){
    return this.form.get("addEmpresa");
  }

  get Descripcion(){
    return this.form.get("addDescripcion");
  }

  limpiar(): void{
		this.form.reset();
	}
  
  onEnviar(event: Event){
  // Detenemos la propagación o ejecución del compotamiento submit del form
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
    const expe = new Experiencia(this.puesto, this.fechaInicio, this.fechaFin, this.empresa, this.descripcion);
      this.expeServ.saveExperiencia(expe).subscribe(data => {alert("Experiencia añadida")});
      window.location.reload();
  }

}
