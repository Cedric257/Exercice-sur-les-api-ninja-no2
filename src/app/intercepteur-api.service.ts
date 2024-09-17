import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environment/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntercepteurApiService  {
private link_api = 'https://api.api-ninjas.com/v1/celebrity?name=Michael Jordan';
private cle_api = environment.api_Key;

constructor (private http : HttpClient){}

getData(): Observable<any> {
  const headers = new HttpHeaders({
    'x-api-key': this.cle_api, 
  });

  return this.http.get<any>(this.link_api, { headers });
}

}
