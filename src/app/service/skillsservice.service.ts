import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsserviceService {

  skiURL = 'http://localhost:8080/skills/';

  constructor(private httpClient: HttpClient) { }
  
  public lista(): Observable<Skills[]>{
    return this.httpClient.get<Skills[]>(this.skiURL + 'get');
  }

  public detail(id: number): Observable<Skills>{
    return this.httpClient.get<Skills>(this.skiURL + `displayone/${id}`);
  }
  
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.skiURL + `delete/${id}`);
  }

  public save(skill: Skills): Observable<any>{
    return this.httpClient.post<any>(this.skiURL + 'save', skill);
  }

  public update(id: number, skill: Skills): Observable<any>{
    return this.httpClient.put<any>(this.skiURL + `edit/${id}`, skill);
  }
}
