import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( 
    private flashMessagesService:FlashMessagesService, 
    private authService:AuthService, 
    private router:Router) { }

  ngOnInit() {
  }
  onLogoutClick(){
    this.authService.logout(); 
    this.flashMessagesService.show("Vous êtes déconnecté", {
      cssClass:'alert-success', 
      timout:3000
    });
    this.router.navigate(['/']); 
    return false;
  }
}
