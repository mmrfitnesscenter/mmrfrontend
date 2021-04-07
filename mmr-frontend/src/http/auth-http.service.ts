import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService {

  constructor(private http: HttpClient) { }

  loginUrl = "http://localhost:3000/dev/api/login";

  login(loginData: any): Promise<any> {
    console.log('http');
    return this.http.post(this.loginUrl, JSON.stringify(loginData)).toPromise();
  }
}
