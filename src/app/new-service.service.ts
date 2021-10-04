import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {HttpParams} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {
  private http = new HttpHeaders().set('Content-type','application/json').set('Accept','application/json');
  constructor(private Http: HttpClient) {}

  register(data:any){
   return this.Http.post(
      environment.apiUrl,
      data,
      {headers: this.http, params: new HttpParams().set('register', 'true')}
    );
  }


}

