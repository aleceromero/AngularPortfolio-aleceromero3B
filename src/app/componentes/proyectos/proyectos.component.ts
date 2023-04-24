import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent implements OnInit {
  proyectos: Proyecto[]=[]; //se llama al modelo proyecto  

  modoEdit: any;

  constructor(private proyectServ:ProyectoService) { }


  ngOnInit(): void {
    this.cargarProyecto();

    if (sessionStorage.getItem('currentUser') == "null"){
      this.modoEdit = false;
    }else if (sessionStorage.getItem('currentUser') == null){
      this.modoEdit = false;
    }else{
      this.modoEdit = true;
    }

  }

  cargarProyecto(): void {
    this.proyectServ.getProyectos().subscribe(data => {this.proyectos = data});
  }

  delete(id:number){
    if(confirm("Querés eliminar este proyecto?")){
      this.proyectServ.deleteProyecto(id).subscribe(data => {this.cargarProyecto();});
      window.location.reload();
      alert("el proyecto se elimino correctamente");
    }
  }

}
