import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class UserService {
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

        return this.http.get(`${environment.baseUrl}/${environment.user}`, queryParams).pipe(map(res => res));
    }

    findByUsername(username: any): Observable<any> {
        let queryParams = {};
        queryParams = {
            headers: this.headers,
            observe: 'response',
            params: new HttpParams()
        };

        return this.http.get(`${environment.baseUrl}/${environment.user}/search/` + username, queryParams).pipe(map(res => res));
    }

    edit(user: any) {
        return this.http.put(`${environment.baseUrl}/${environment.user}/${user.id}`, user, { headers: this.headers, responseType: 'json' });

    }
    delete(id: any) {
        return this.http.delete(`${environment.baseUrl}/${environment.user}/${id}`, { headers: this.headers, responseType: 'text' });

    }
    addNew(user: any) {

        return this.http.post(`${environment.baseUrl}/${environment.user}`, user, { headers: this.headers, responseType: 'json' });
    }
    getOne(id: any): Observable<any> {

        let queryParams = {};
        queryParams = {
            headers: this.headers,
            observe: 'response',
            params: new HttpParams()
        };
        return this.http.get(`${environment.baseUrl}/${environment.user}/` + id, queryParams).pipe(map(res => res));

    }



}
