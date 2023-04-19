import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PersonaService } from 'src/app/servicios/persona.service';


@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})

export class SobreMiComponent implements OnInit {
  personas: Persona[]=[]; // llamamos al modelo persona

  modoEdit: any;

  constructor(private persoServ:PersonaService, private autService: AutenticacionService) { }

  
  ngOnInit(): void {
    this.cargarPersona();

    if (sessionStorage.getItem('currentUser') == "null"){
      this.modoEdit = false;
    }else if (sessionStorage.getItem('currentUser') == null){
      this.modoEdit = false;
    }else{
      this.modoEdit = true;
    }
  }

  cargarPersona(): void {
    this.persoServ.getPersonas().subscribe(data => {this.personas = data});
  }

}
