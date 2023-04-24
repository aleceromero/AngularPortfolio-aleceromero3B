import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {
  estudios: Educacion[]=[];  //se llama al modelo educacion

  modoEdit: any;

  constructor(private eduServ:EducacionService) { }


  ngOnInit(): void {
    this.cargarEducacion();

    if (sessionStorage.getItem('currentUser') == "null"){
      this.modoEdit = false;
    }else if (sessionStorage.getItem('currentUser') == null){
      this.modoEdit = false;
    }else{
      this.modoEdit = true;
    }
        
  }

  cargarEducacion(): void {
    this.eduServ.getEstudios().subscribe(data => {this.estudios = data})
  }

  delete(id:number): void{
    if(confirm("Querés eliminar esta educación?")){
      this.eduServ.deleteEducacion(id).subscribe(data => {this.cargarEducacion();});
      window.location.reload();
      alert("la educacion se elimino correctamente");
    }
  }

}
