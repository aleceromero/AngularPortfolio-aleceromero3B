import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';


@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})

export class SobreMiComponent implements OnInit {
  personas: Persona[]=[]; // llamamos al modelo persona

  constructor(private persoServ:PersonaService) { }

  
  ngOnInit(): void {
    this.cargarPersona();
  }

  cargarPersona(): void {
    this.persoServ.getPersonas().subscribe(data => {this.personas = data});
  }

}
