import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BranchService {
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
      .get(`${environment.baseUrl}/${environment.branch}`, queryParams)
      .pipe(map((res) => res));
  }

  edit(id: any, branchName: any): Observable<any> {
    return this.http.put(
      `${environment.baseUrl}/${environment.branch}/${id}`,
      { name: branchName },
      { headers: this.headers, responseType: 'json' }
    );
  }

  delete(id: any): Observable<any> {
    return this.http.delete(
      `${environment.baseUrl}/${environment.branch}/${id}`,
      { headers: this.headers, responseType: 'text' }
    );
  }

  addNew(branch: any): Observable<any> {
    return this.http.post(
      `${environment.baseUrl}/${environment.branch}`,
      branch,
      { headers: this.headers, responseType: 'json' }
    );
  }
}
