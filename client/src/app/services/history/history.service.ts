import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class HistoryService {
    private headers = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(
        private http: HttpClient
    ) { }

    getHistory(input:any): Observable<any> {
		let queryParams = {};
        queryParams = {
            headers: this.headers,
            observe: 'response',
            params: new HttpParams()
        };

		return this.http.get(`${environment.baseUrl}/${environment.history}/search/`+input, queryParams).pipe(map(res => res));
	}
    

	addNew(history: any){
		
        return this.http.post(`${environment.baseUrl}/${environment.history}`, history, {headers: this.headers, responseType: 'json'});
	}
    



}
