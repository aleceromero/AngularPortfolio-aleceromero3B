import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {
  experiencias: Experiencia[]=[]; //se llama al modelo experiencia

  modoEdit: any;
  
  constructor(private expeServ:ExperienciaService, private autService: AutenticacionService) { }
  

  ngOnInit(): void {
    this.cargarExperiencia();
    
    if (sessionStorage.getItem('currentUser') == "null"){
      this.modoEdit = false;
    }else if (sessionStorage.getItem('currentUser') == null){
      this.modoEdit = false;
    }else{
      this.modoEdit = true;
    }

  }
    
  

  cargarExperiencia():void{
    this.expeServ.getExperiencias().subscribe(data => {this.experiencias = data});
  }

  delete(id:number){
    if(confirm("Querés eliminar esta experiencia?")){
    this.expeServ.deleteExperiencia(id).subscribe(data => {this.cargarExperiencia();});
    window.location.reload();
    alert("la experiencia se elimino correctamente");
    }
  }
  

}
