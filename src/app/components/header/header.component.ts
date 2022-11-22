import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  stateHeader!: boolean;

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('token') == null) {
      this.stateHeader = true;
    } else {
      this.stateHeader = false;
    }
  }

  hideButton() {
    return this.stateHeader;
  }
  sessionOn() {
    if(localStorage.getItem('token') != null ) {
      this.stateHeader = false;
      return true;
    }    
    return false;
  }
}
