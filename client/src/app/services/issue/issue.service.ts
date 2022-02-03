import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}
