import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommitService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    let queryParams = {};
    queryParams = {
      headers: this.headers,
      observe: 'response',
      params: new HttpParams(),
    };
    return this.http
      .get(`${environment.baseUrl}/${environment.commit}`, queryParams)
      .pipe(map((res) => res));
  }

  addNew(commit: any): Observable<any> {
    return this.http.post(
      `${environment.baseUrl}/${environment.commit}`,
      commit,
      { headers: this.headers, responseType: 'json' }
    );
  }
}
