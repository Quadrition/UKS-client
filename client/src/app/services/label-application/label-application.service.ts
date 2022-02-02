import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class LabelApplicationService {
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

		return this.http.get(`${environment.baseUrl}/${environment.labelApplication}/all`, queryParams).pipe(map(res => res));
	}
    
    edit(labelApplication: any){
        return this.http.put(`${environment.baseUrl}/${environment.labelApplication}`, labelApplication, {headers: this.headers, responseType: 'json'});

	}
	delete(id: any){
        return this.http.delete(`${environment.baseUrl}/${environment.labelApplication}/${id}`, {headers: this.headers, responseType: 'text'});

	}
	addNew(labelApplication: any){
		return this.http.post(`${environment.baseUrl}/${environment.labelApplication}`, labelApplication, {headers: this.headers, responseType: 'json'});
	}



}
