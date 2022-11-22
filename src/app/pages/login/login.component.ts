import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { url } from 'inspector';
import { UserModel } from 'src/app/models/user.model';
import{UserService} from '../../service/users.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  public LoginForm!: UserModel;
  public username!: string;
  public password!: string;
  
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {   
  }

  login() {  
    let user: UserModel = {username: this.username, password: this.password};  
    console.log(user); 
    this.userService.login(user).subscribe( data => {   
      localStorage.clear();
      localStorage.setItem('token',data.token);
      localStorage.setItem('reload', '1');      
      this.router.navigate(['home']).then();
      
    }, 
    (error)=> {
      alert("Usuario o contrañesa invalido");
    });
    
  }
}
