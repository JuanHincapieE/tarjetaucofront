import { Component, OnInit } from '@angular/core';
import { StringifyOptions } from 'querystring';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  email!: string;
  password!: string;

  constructor() { }

  login() {
    console.log(this.email);
    console.log(this.password);
  }

}
