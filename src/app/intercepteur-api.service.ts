import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { apiIntercepteurInterceptor } from './intercepteur-api.interceptor';

@Injectable({
  providedIn: 'root'
})
export class IntercepteurApiService  {
private apiUrl= 'https://api.api-ninjas.com/v1/celebrity?name=Michael Jordan';
private apiKey='Km6zrgw2XCmVWFR5ytLgIQ==87WF8LvvFSwgNfIB'
constructor (private http : HttpClient){}

getData(): Observable<any> {
  const headers=new HttpHeaders({
    'X-api-key':this.apiKey
  });
  return this.http.get(this.apiUrl, {headers});
}

}
