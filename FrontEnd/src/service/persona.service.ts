import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../app/model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url = 'http://localhost:8080/personas/';

  constructor(private httpClient: HttpClient) { }

  public lista():Observable<persona[]>{
    return this.httpClient.get<persona[]>(this.url+'lista');

  }

  public detail(id:number): Observable<persona>{
    return this.httpClient.get<persona>(this.url+`detail/${id}`);
  }

  /*public save(persona: persona):Observable<any>{
    return this.httpClient.post<any>(this.url+'create',persona);
  }*/

  public update(id:number, Persona: persona):Observable<any>{
    return this.httpClient.put<any>(this.url+`update/${id}`, Persona);
  }

  /*public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url+`delete/${id}`);
  }*/
}
