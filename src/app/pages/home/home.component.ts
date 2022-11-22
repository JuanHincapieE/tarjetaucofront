import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  public stateLogin!: boolean;
  constructor(public router: ActivatedRoute) {
    if(localStorage.getItem('reload') != null) {
      localStorage.removeItem('reload');
      window.location.reload();
    }
   }

  ngOnInit(): void {    
    if(localStorage.getItem('token') != null) {
      this.stateLogin = true;
    } else {
      this.stateLogin = false;
    }
    
  }

  sessionOff() {
    if(localStorage.getItem('token') != null ) {
      localStorage.clear();
      this.stateLogin = false;
      window.location.reload();
      return false;
    }     
    window.location.reload();
    return true;
    
  }

}
