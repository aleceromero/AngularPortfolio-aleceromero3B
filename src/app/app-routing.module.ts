import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './componentes/error404/error404.component';
import { IndexComponent } from './componentes/index/index.component';
import { EditExperienciaComponent } from './editar/edit-experiencia/edit-experiencia.component';
import { EditEducacionComponent } from './editar/edit-educacion/edit-educacion.component';
import { EditHabilidadComponent } from './editar/edit-habilidad/edit-habilidad.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'editExperiencia/:id', component: EditExperienciaComponent},
  {path: 'editEducacion/:id', component: EditEducacionComponent},
  {path: 'editHabilidad/:id', component: EditHabilidadComponent},
  {path: '**', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
