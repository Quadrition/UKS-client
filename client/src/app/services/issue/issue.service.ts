import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Issue } from 'src/app/model/Issue';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient) { }

    addNew(issue: any, id:any){
		
      return this.http.post(`${environment.baseUrl}/${environment.issue}/${id}`, issue, {headers: this.headers, responseType: 'json'});
}

getOne(id: any): Observable<any> {

  let queryParams = {};
      queryParams = {
          headers: this.headers,
          observe: 'response',
          params: new HttpParams()
      };
  return this.http.get(`${environment.baseUrl}/${environment.issue}/`+id,  queryParams).pipe(map(res => res));

}

edit(issue: Issue){
  return this.http.put<Issue>(`${environment.baseUrl}/${environment.issue}/${issue.id}`, issue, {observe : 'response'});

}
}
