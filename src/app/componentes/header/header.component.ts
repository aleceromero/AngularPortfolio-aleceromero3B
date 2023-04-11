import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  personas: Persona[]=[]; //llamamos al modelo persona  

  constructor(private persoServ:PersonaService) { }

  ngOnInit(): void {
    this.cargarPersona();
  }

  cargarPersona(): void {
    this.persoServ.getPersonas().subscribe(data => {this.personas = data});
  }

}
