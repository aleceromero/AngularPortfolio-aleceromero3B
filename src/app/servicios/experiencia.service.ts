import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})

export class ExperienciaService {

  url= 'http://localhost:8080/experiencia/'

  constructor(private httpClient: HttpClient) { }

  
  public getExperiencias(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.url + 'lista');
  }

  public findExperiencia(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.url + `ver/${id}`);
  }

  public saveExperiencia(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', experiencia);
  }

  public deleteExperiencia(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }

  public editExperiencia(experiencia: Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', experiencia);
  }


}
