/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

import { AppState } from './app.service';
import { AuthService } from './+users/auth.service';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
 
<mat-toolbar color="primary">
   

  <span>TUKIO</span>

  <span class="middle"></span>

  <span>

<a mat-button routerLink="./">index</a>
      
<a mat-button routerLink="./home">Home</a>
    
<a mat-button routerLink="./eventos" routerLinkActive="active">Eventos</a>

<a mat-button routerLink="./barrel">Barel</a>

<a mat-button routerLink="./create">Create Events</a>

<a mat-button routerLink="./about">About</a>

<a mat-button *ngIf ="!auth.isAuthenticated()" routerLink="./user/login">LOGIN</a>
<a mat-button *ngIf= "auth.isAuthenticated()" routerLink="./user/profile">WELCOME</a>


  
  </span>



  </mat-toolbar>
    

    <main>
      <router-outlet></router-outlet>
    
    </main>

   


    <footer>
      
    </footer>
  `
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Eventa App';
  public url = '';

  constructor(public appState: AppState , private auth: AuthService ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
