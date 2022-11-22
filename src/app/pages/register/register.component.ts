import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterModel } from 'src/app/models/register.model';
import {UserService} from '../../service/users.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  username!: string;
  password!: string;
  confirmPassword!: string;
  

  constructor(private userService: UserService, private router: Router) { }

  register() {
   if(this.password != this.confirmPassword) {
    alert("Las contraseñas no coinciden");
   } else {
    let user: RegisterModel = {userName: this.username, password: this.password};
    this.userService.register(user).subscribe((data) => {
      if(data.result == 'ok') {
       
        alert("Error al crear el usuario");
      } else {
        alert("Usuario creado");
        this.router.navigate(['login']).then();
      }
    })
   }
  }

}
