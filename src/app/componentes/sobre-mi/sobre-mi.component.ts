import { Component, OnInit } from '@angular/core';
import { GeneralMaqPortService } from 'src/app/servicios/general-maq-port.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  miMaqPortfolio:any;
  constructor(private datosPortfolio:GeneralMaqPortService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.miMaqPortfolio=data;
    })
  }

}
