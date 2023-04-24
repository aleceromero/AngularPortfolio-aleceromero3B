import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../model/habilidad';

@Injectable({
  providedIn: 'root'
})

export class HabilidadService {

  url = 'https://portfolio-backend-6xtv.onrender.com/habilidad/'
  

  constructor(private httpClient: HttpClient) { }


  public getHabilidades(): Observable<Habilidad[]> {
    return this.httpClient.get<Habilidad[]>(this.url + 'lista');
  }

  public findHabilidad(id: number): Observable<Habilidad> {
    return this.httpClient.get<Habilidad>(this.url + `ver/${id}`);
  }

  public saveHabilidad(habilidad: Habilidad): Observable<any> {
    return this.httpClient.post<any>(this.url + 'crear', habilidad);
  }

  public deleteHabilidad(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }

  public editHabilidad(habilidad: Habilidad): Observable<any> {
    return this.httpClient.put<any>(this.url + 'editar', habilidad);
  }

} 
