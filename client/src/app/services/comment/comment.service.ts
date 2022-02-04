import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<any> {
    let queryParams = {};
    queryParams = {
      headers: this.headers,
      observe: 'response',
      params: new HttpParams()
    };
    return this.http.get(`${environment.baseUrl}/${environment.comment}`, queryParams).pipe(map(res => res));
  }

  search(id: any): Observable<any> {
    let queryParams = {};
    queryParams = {
      headers: this.headers,
      observe: 'response',
      params: new HttpParams()
    };
    return this.http.get(`${environment.baseUrl}/${environment.comment}/search/` + id, queryParams).pipe(map(res => res));
  }

  edit(comment: any) {
    return this.http.put(`${environment.baseUrl}/${environment.comment}`, comment, { headers: this.headers, responseType: 'json' });
  }

  delete(id: any) {
    return this.http.delete(`${environment.baseUrl}/${environment.comment}/${id}`, { headers: this.headers, responseType: 'text' });
  }

  addNew(comment: any) {
    return this.http.post(`${environment.baseUrl}/${environment.comment}`, comment, { headers: this.headers, responseType: 'json' });
  }

  getOne(id: any): Observable<any> {
    let queryParams = {};
    queryParams = {
      headers: this.headers,
      observe: 'response',
      params: new HttpParams()
    };
    return this.http.get(`${environment.baseUrl}/${environment.comment}/` + id, queryParams).pipe(map(res => res));
  }
}
