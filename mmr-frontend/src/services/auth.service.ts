import { Injectable } from '@angular/core';
import { AuthHttpService } from 'src/http/auth-http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authHttp: AuthHttpService) { }

  login(loginData: any) {
    console.log('service');
    return this.authHttp.login(loginData);
  }
}
