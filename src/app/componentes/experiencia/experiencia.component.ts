import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {
  experiencias: Experiencia[]=[]; //se llama al modelo experiencia
  
  constructor(private expeServ:ExperienciaService) { }
  

  ngOnInit(): void {
    this.cargarExperiencia();    
  }

  cargarExperiencia():void{
    this.expeServ.getExperiencias().subscribe(data => {this.experiencias = data});
  }

}
