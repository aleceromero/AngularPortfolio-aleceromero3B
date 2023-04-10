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

  constructor(private eduServ:EducacionService) { }


  ngOnInit(): void {
    this.cargarEducacion();
  }

  cargarEducacion(): void {
    this.eduServ.getEstudios().subscribe(data => {this.estudios = data})
  }

}
