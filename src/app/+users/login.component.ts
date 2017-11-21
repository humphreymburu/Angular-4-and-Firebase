import {
  Component,
  OnInit,
} from '@angular/core';
/**
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

import { AuthService } from './auth.service';
import { Router } from '@angular/router';


console.log('`login` component loaded asynchronously');

@Component({
  selector: 'login',
  templateUrl: './login.component.html',

  styles:[`
  
.container {
  margin-top: 20px;
}
   
  .login {
     margin-top: 20px;
    flex-wrap: wrap;
    text-align: center;
     display: flex;
     justify-content: center;
     flex-direction: column;
   }
   div[fxLayoutAlign] { margin-top:10px;}
`]


})

export class LoginComponent {

constructor(private authService:AuthService, private route: Router){

}


 login(formValues){
      this.authService.loginUser(formValues.userName, formValues.password );
      this.route.navigate(['eventos']);
  }

  cancel(){
    this.route.navigate(['eventos']);
  }

}
