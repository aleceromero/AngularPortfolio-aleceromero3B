import { Component, OnInit } from '@angular/core';
import { GeneralMaqPortService } from 'src/app/servicios/general-maq-port.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  miMaqPortfolio:any;
  experienciaList:any;
  constructor(private datosPortfolio:GeneralMaqPortService) { }
  
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.miMaqPortfolio=data;
      this.experienciaList=data.experiencia;
    })
  }

}
