import { Component, OnInit } from '@angular/core';
import { GeneralMaqPortService } from 'src/app/servicios/general-maq-port.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  miMaqPortfolio:any;
  proyectosList:any;
  constructor(private datosPortfolio:GeneralMaqPortService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.miMaqPortfolio=data;
      this.proyectosList=data.proyectos;
    })
  }

}
