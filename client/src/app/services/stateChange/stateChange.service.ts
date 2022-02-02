import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class StateChangeService {
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

        return this.http.get(`${environment.baseUrl}/${environment.stateChange}/all`, queryParams).pipe(map(res => res));
    }

    edit(stateChange: any) {
        return this.http.put(`${environment.baseUrl}/${environment.stateChange}/${stateChange.id}`, stateChange, { headers: this.headers, responseType: 'json' });

    }
    delete(id: any) {
        return this.http.delete(`${environment.baseUrl}/${environment.stateChange}/${id}`, { headers: this.headers, responseType: 'text' });

    }
    addNew(stateChange: any) {

        return this.http.post(`${environment.baseUrl}/${environment.stateChange}/save`, stateChange, { headers: this.headers, responseType: 'json' });
    }
    getOne(id: any): Observable<any> {

        let queryParams = {};
        queryParams = {
            headers: this.headers,
            observe: 'response',
            params: new HttpParams()
        };
        return this.http.get(`${environment.baseUrl}/${environment.stateChange}/` + id, queryParams).pipe(map(res => res));

    }



}
