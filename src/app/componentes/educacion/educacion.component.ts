import { Component, OnInit } from '@angular/core';
import { GeneralMaqPortService } from 'src/app/servicios/general-maq-port.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  miMaqPortfolio:any;
  educacionList:any;
  constructor(private datosPortfolio:GeneralMaqPortService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.miMaqPortfolio=data;
      this.educacionList=data.educacion;
    })
  }

}
