import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class LabelService {
    private headers = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(
        private http: HttpClient
    ) { }

    


}
