import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateLogin(user){
    if(user.email==undefined||user.password==undefined){
      return false;
    }
    return true;
  }

  validateRegister(user){
    if(user.name == undefined ||user.lastname == undefined ||user.email == undefined ||user.password == undefined ||user.confirmer == undefined){
      return false
    }else{
      return true;
    }
  }
  validatePassword(password, password1){
    if(password!=password1){
      return false;
    }
    return true;
  }
  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}
