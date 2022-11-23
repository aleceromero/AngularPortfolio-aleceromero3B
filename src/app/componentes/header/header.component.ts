import { Component, OnInit } from '@angular/core';
import { GeneralMaqPortService } from 'src/app/servicios/general-maq-port.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  miMaqPortfolio:any;
  constructor(private datosPortfolio:GeneralMaqPortService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miMaqPortfolio=data;
    });
  }

}
