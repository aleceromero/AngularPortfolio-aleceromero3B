import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  

  modoEdit: any;

  constructor(private autService: AutenticacionService) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('currentUser') == "null"){
      this.modoEdit = false;
    }else if (sessionStorage.getItem('currentUser') == null){
      this.modoEdit = false;
    }else{
      this.modoEdit = true;
    }
  }

  cerrarSesion(){
    if (confirm("Desea cerrar sesion?")) {
    sessionStorage.setItem('currentUser', "null");
    this.modoEdit = false;
    alert("sesion cerrada");
    window.location.reload();
    return this.modoEdit;}
  }

}
