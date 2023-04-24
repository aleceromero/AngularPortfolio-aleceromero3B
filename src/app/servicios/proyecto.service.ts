import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})

export class ProyectoService {

  url = 'https://portfolio-backend-6xtv.onrender.com/proyecto/'


  constructor(private httpClient: HttpClient) { }


  public getProyectos(): Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(this.url + 'lista');
  }

  public findProyecto(id: number): Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(this.url + `ver/${id}`);
  }

  public saveProyecto(proyecto: Proyecto): Observable<any> {
    return this.httpClient.post<any>(this.url + 'crear', proyecto);
  }

  public deleteProyecto(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }

  public editProyecto(proyecto: Proyecto): Observable<any> {
    return this.httpClient.put<any>(this.url + 'editar', proyecto);
  }

  
}
