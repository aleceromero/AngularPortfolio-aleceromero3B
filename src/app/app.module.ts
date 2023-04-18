import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { Error404Component } from './componentes/error404/error404.component';
import { LoginModalComponent } from './modales/login-modal/login-modal.component';
import { BannerModalComponent } from './modales/banner-modal/banner-modal.component';
import { ImgPerfilModalComponent } from './modales/img-perfil-modal/img-perfil-modal.component';
import { SobreMiModalComponent } from './modales/sobre-mi-modal/sobre-mi-modal.component';
import { ExperienciaModalComponent } from './modales/experiencia-modal/experiencia-modal.component';
import { AgregarExpModalComponent } from './modales/agregar-exp-modal/agregar-exp-modal.component';
import { EducacionModalComponent } from './modales/educacion-modal/educacion-modal.component';
import { AgregarEdModalComponent } from './modales/agregar-ed-modal/agregar-ed-modal.component';
import { HabilidadesModalComponent } from './modales/habilidades-modal/habilidades-modal.component';
import { AgregarHabModalComponent } from './modales/agregar-hab-modal/agregar-hab-modal.component';
import { ProyectosModalComponent } from './modales/proyectos-modal/proyectos-modal.component';
import { AgregarProyModalComponent } from './modales/agregar-proy-modal/agregar-proy-modal.component';
import { IndexComponent } from './componentes/index/index.component';
import { LoginComponent } from './componentes/login/login.component';
import { LogoutComponent } from './componentes/logout/logout.component';
import { EditExperienciaComponent } from './editar/edit-experiencia/edit-experiencia.component';
import { EditEducacionComponent } from './editar/edit-educacion/edit-educacion.component';
import { EditHabilidadComponent } from './editar/edit-habilidad/edit-habilidad.component';
import { EditProyectoComponent } from './editar/edit-proyecto/edit-proyecto.component';
import { EditSobreMiComponent } from './editar/edit-sobre-mi/edit-sobre-mi.component';
import { FormLoginComponent } from './componentes/form-login/form-login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SobreMiComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    Error404Component,
    LoginModalComponent,
    BannerModalComponent,
    ImgPerfilModalComponent,
    SobreMiModalComponent,
    ExperienciaModalComponent,
    AgregarExpModalComponent,
    EducacionModalComponent,
    AgregarEdModalComponent,
    HabilidadesModalComponent,
    AgregarHabModalComponent,
    ProyectosModalComponent,
    AgregarProyModalComponent,
    IndexComponent,
    LoginComponent,
    LogoutComponent,
    EditExperienciaComponent,
    EditEducacionComponent,
    EditHabilidadComponent,
    EditProyectoComponent,
    EditSobreMiComponent,
    FormLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
