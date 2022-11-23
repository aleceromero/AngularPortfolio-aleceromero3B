import { Component, OnInit } from '@angular/core';
import { GeneralMaqPortService } from 'src/app/servicios/general-maq-port.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  miMaqPortfolio:any;
  constructor(private datosPortfolio:GeneralMaqPortService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.miMaqPortfolio=data;
    })
  }

}
