import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    private headers = new HttpHeaders({'Content-Type': 'application/json'});

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

		return this.http.get(`${environment.baseUrl}/${environment.project}`, queryParams).pipe(map(res => res));
	}

    getMy(): Observable<any> {
		let queryParams = {};
        queryParams = {
            headers: this.headers,
            observe: 'response',
            params: new HttpParams()
        };

		return this.http.get(`${environment.baseUrl}/${environment.project}/my`, queryParams).pipe(map(res => res));
	}
    
    edit(project: any){
        return this.http.put(`${environment.baseUrl}/${environment.project}`, project, {headers: this.headers, responseType: 'json'});

	}
	delete(id: any){
        return this.http.delete(`${environment.baseUrl}/${environment.project}/${id}`, {headers: this.headers, responseType: 'text'});

	}
	addNew(project: any){
		
        return this.http.post(`${environment.baseUrl}/${environment.project}`, project, {headers: this.headers, responseType: 'json'});
	}
    getOne(id: any): Observable<any> {

		let queryParams = {};
        queryParams = {
            headers: this.headers,
            observe: 'response',
            params: new HttpParams()
        };
		return this.http.get(`${environment.baseUrl}/${environment.project}/`+id,  queryParams).pipe(map(res => res));

	}



}
