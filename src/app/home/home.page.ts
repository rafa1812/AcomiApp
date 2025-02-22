import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/Authentication.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private authService: AuthenticationService

  ) { }

  ngOnInit() {
  }
  
  logoutUser(){
    this.authService.logout();
  }



}
