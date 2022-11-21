import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/users.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  email!: string;
  password!: string;
  confirmPassword!: string;
  

  constructor() { }

  register() {
   
  }

}
