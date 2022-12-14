import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../model/education';

@Injectable({
  providedIn: 'root'
})
export class EducationserviceService {
  edURL = 'http://localhost:8080/education/';

  constructor(private httpClient: HttpClient) { }
  
  public lista(): Observable<Education[]>{
    return this.httpClient.get<Education[]>(this.edURL + 'get');
  }

  public detail(id: number): Observable<Education>{
    return this.httpClient.get<Education>(this.edURL + `displayone/${id}`);
  }
  
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.edURL + `delete/${id}`);
  }

  public save(education: Education): Observable<any>{
    return this.httpClient.post<any>(this.edURL + 'save', education);
  }

  public update(id: number, education: Education): Observable<any>{
    return this.httpClient.put<any>(this.edURL + `edit/${id}`, education);
  }


}
