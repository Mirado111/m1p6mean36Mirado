import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import { $ } from 'protractor';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: String; 
  password: String;
  constructor(
    private validateService: ValidateService, 
    private flashMessagesService:FlashMessagesService, 
    private authService:AuthService, 
    private router:Router
  ) { }

  ngOnInit() {
  }
  onLoginSubmit(){
    const user = {
      email: this.email,
      password:  this.password
    }
    if(!this.validateService.validateLogin(user)){
      this.flashMessagesService.show('Veuillez remplir tout les champs', {cssClass: 'alert-primary', timeout: 3000});
      return false;
    }
    if(!this.validateService.validateEmail(user.email)){
      this.flashMessagesService.show('Veuillez utiliser un mail valide', {cssClass: 'alert-primary', timeout: 3000});
      return false;
    }
    this.authService.authenticateUser(user).subscribe(data => {
        if(data.success){
            this.authService.storeUserData(data.token, data.user);
            this.flashMessagesService.show("Vous êtes connecté", {
              cssClass: 'alert-success', 
              timout: 5000});
              this.router.navigate(['/home']);
        }else{
          this.flashMessagesService.show(data.msg, {
            cssClass: 'alert-primary', 
            timout: 5000});
            this.router.navigate(['/login']);
        }
    });
  }
}
