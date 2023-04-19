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

  modoEdit: any;

  constructor(private persoServ:PersonaService) { }

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

  cerrarSesion(){
    sessionStorage.setItem('currentUser', "null");
    this.modoEdit = false;
    alert("cesion cerrada");
    window.location.reload();
    return this.modoEdit;
    
  }

}
