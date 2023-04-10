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
  
  constructor(private habServ:HabilidadService) { }


  ngOnInit(): void {
   this.cargarHabilidad();
  }

  cargarHabilidad(): void {
    this.habServ.getHabilidades().subscribe(data => {this.habilidades = data})
  }

}
