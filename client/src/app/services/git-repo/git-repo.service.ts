import { GitRepo } from './../../model/GitRepo';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GitRepoService {

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
  
      return this.http.get(`${environment.baseUrl}/${environment.gitRepo}`, queryParams).pipe(map(res => res));
    }


    addNew(repo: any){
		
      return this.http.post(`${environment.baseUrl}/${environment.gitRepo}`, repo, {headers: this.headers, responseType: 'json'});
}

getOne(id: any): Observable<any> {

  let queryParams = {};
      queryParams = {
          headers: this.headers,
          observe: 'response',
          params: new HttpParams()
      };
  return this.http.get(`${environment.baseUrl}/${environment.gitRepo}/`+id,  queryParams).pipe(map(res => res));

}

edit(repo: GitRepo){
  return this.http.put<GitRepo>(`${environment.baseUrl}/${environment.gitRepo}/${repo.id}`, repo, {observe : 'response'});

}
}

