import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projects } from '../model/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsserviceService {

  projURL = 'http://localhost:8080/projects/';

  constructor(private httpClient: HttpClient) { }
  
  public lista(): Observable<Projects[]>{
    return this.httpClient.get<Projects[]>(this.projURL + 'get');
  }

  public detail(id: number): Observable<Projects>{
    return this.httpClient.get<Projects>(this.projURL + `displayone/${id}`);
  }
  
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.projURL + `delete/${id}`);
  }

  public save(project: Projects): Observable<any>{
    return this.httpClient.post<any>(this.projURL + 'save', project);
  }

  public update(id: number, project: Projects): Observable<any>{
    return this.httpClient.put<any>(this.projURL + `edit/${id}`, project);
  }

}
