import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {

  url= 'https://portfolio-backend-6xtv.onrender.com/persona/'

  constructor(private httpClient: HttpClient) { }


  public getPersonas(): Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.url + 'lista');
  }

  public findPersona(id: number): Observable<Persona>{
    return this.httpClient.get<Persona>(this.url + `ver/${id}`);
  }

  public savePersona(persona: Persona): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', persona);
  }

  public deletePersona(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }

  public editPersona(persona: Persona): Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', persona);
  }


}
