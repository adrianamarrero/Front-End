import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../model/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceserviceService {
  expURL = 'http://localhost:8080/experience/';
  constructor(private httpClient: HttpClient) { }
  
  public lista(): Observable<Experience[]>{
    return this.httpClient.get<Experience[]>(this.expURL + 'get');
  }

  public detail(id: number): Observable<Experience>{
    return this.httpClient.get<Experience>(this.expURL + `displayone/${id}`);
  }
  
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }

  public save(experience: Experience): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'save', experience);
  }

  public update(id: number, experiencia: Experience): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `edit/${id}`, experiencia);
  }

}
