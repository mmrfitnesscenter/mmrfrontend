import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.scss',
    '../../styles/fonts.scss',
    '../../styles/common.scss']
})
export class LoginComponent implements OnInit {
  public loading: boolean =  false;
  constructor(private authService: AuthService) {
  }
  ngOnInit(): void {

  }

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  submit() {
    this.loading = true;
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value)
      .then(data => {
        this.loading = false;
        console.log(data);
      })
  }



}
