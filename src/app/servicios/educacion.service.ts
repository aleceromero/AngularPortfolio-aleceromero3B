import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Educacion } from '../model/educacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EducacionService {

  url= 'https://portfolio-backend-6xtv.onrender.com/educacion/'

  constructor(private httpClient: HttpClient) { }


  public getEstudios(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.url + 'lista');
  }

  public findEducacion(id: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.url + `ver/${id}`);
  }

  public saveEducacion(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', educacion);
  }

  public deleteEducacion(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }

  public editEducacion(educacion: Educacion): Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', educacion);
  }

}
