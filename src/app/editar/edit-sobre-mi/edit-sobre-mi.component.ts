import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-edit-sobre-mi',
  templateUrl: './edit-sobre-mi.component.html',
  styleUrls: ['./edit-sobre-mi.component.css']
})

export class EditSobreMiComponent implements OnInit {
  form: FormGroup;
  persona: Persona = null; //se llama al modelo persona

  constructor( private formBuilder: FormBuilder, private persoServ: PersonaService,
               private activatedRoute: ActivatedRoute, private router: Router) { 

    // grupo de controles formulario
    this.form = this.formBuilder.group({
      id:[''],
      nombreCompleto:['', [Validators.required]],
      ciudad:['', [Validators.required]],
      pais:['', [Validators.required]],
      emailContacto:['', [Validators.required, Validators.email]],
      imgBanner:['', [Validators.required]],
      imgPerfil:['', [Validators.required]],
      sobreMi:[''],
      edad:[''],
      emailLogin:[''],
      password:[''],
    })
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.persoServ.findPersona(id).subscribe(data => {
      this.persona=data;
    },err =>{
      alert("error al cargar los datos");
      this.router.navigate(['']);
    })
  }

  // metodos para el formulario
  get NombreCompleto(){
    return this.form.get("nombreCompleto");
  }

  get Ciudad(){
    return this.form.get("ciudad");
  }

  get Pais(){
    return this.form.get("pais");
  }

  get EmailContacto(){
    return this.form.get("emailContacto")
  }

  get ImgBanner(){
    return this.form.get("imgBanner");
  }

  get ImgPerfil(){
    return this.form.get("imgPerfil");
  }

  get SobreMi(){
    return this.form.get("sobreMi");
  }

  get Edad(){
    return this.form.get("edad");
  }

  get EmailLogin(){
    return this.form.get("emailLogin");
  }

  get Password(){
    return this.form.get("password");
  }

  onUpdate():void{
    this.persoServ.editPersona(this.form.value).subscribe(data => {});
  }

  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onUpdate();
      alert("perfil modificado");
      this.router.navigate(['']);
    }else{
      alert("falló la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }

}
