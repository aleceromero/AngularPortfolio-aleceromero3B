import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';


@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})

export class HabilidadesComponent implements OnInit {
  habilidades: Habilidad[]=[]; //se llama al modelo habilidad

  modoEdit: any;
  
  constructor(private habServ:HabilidadService) { }


  ngOnInit(): void {
   this.cargarHabilidad();
  
   if (sessionStorage.getItem('currentUser') == "null"){
    this.modoEdit = false;
  }else if (sessionStorage.getItem('currentUser') == null){
    this.modoEdit = false;
  }else{
    this.modoEdit = true;
  }

  }

  cargarHabilidad(): void {
    this.habServ.getHabilidades().subscribe(data => {this.habilidades = data})
  }

  delete(id:number){
    if(confirm("Querés eliminar esta habilidad?")){
      this.habServ.deleteHabilidad(id).subscribe(data => {this.cargarHabilidad();});
      window.location.reload();
      alert("la habilidad se elimino correctamente");
    }
  }

}
