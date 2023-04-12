import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';


@Component({
  selector: 'app-agregar-proy-modal',
  templateUrl: './agregar-proy-modal.component.html',
  styleUrls: ['./agregar-proy-modal.component.css']
})
export class AgregarProyModalComponent implements OnInit {

  form: FormGroup;
  proyecto: string = '';
  imgProyecto: string = '';
  urlProyecto: string = '';
  descripcion: string = '';

  constructor(private formBuilder: FormBuilder, private proyectServ:ProyectoService) { 
    // grupo de controles formulario
    this.form = this.formBuilder.group({
      addProyecto:['', [Validators.required]],
      addImgProyecto:['', [Validators.required]],
      addUrlProyecto:['', [Validators.required]],
      addDescripcionPr:[''],
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

  get DescripcionPr(){
    return this.form.get("addDescripcionPr");
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
    const proyect = new Proyecto(this.proyecto, this.imgProyecto, this.urlProyecto, this.descripcion);
      this.proyectServ.saveProyecto(proyect).subscribe(data => {});
      window.location.reload();
      alert("proyecto añadido");
      
  }

}
