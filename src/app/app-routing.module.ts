import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './componentes/error404/error404.component';
import { IndexComponent } from './componentes/index/index.component';
import { EditExperienciaComponent } from './editar/edit-experiencia/edit-experiencia.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'editExperiencia/:id', component: EditExperienciaComponent},
  {path: '**', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
