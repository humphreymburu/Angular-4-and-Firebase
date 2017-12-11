/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation,
  Inject,
  Input
} from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { AppState } from './app.service';
import { AuthService } from './+users/auth.service';
import { EventoService } from './+evento/evento-service';
import { ISession } from './+evento/shared/evento-model';
//import { SimpleDialogComponent } from './common/simple-modal.component';


/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss'
  ],

  templateUrl:'app.component.html'
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Eventa App';
  public url = '';
  public found: string;

  public searchTerm: string = "";
  foundSessions: ISession[];


  constructor(public appState: AppState , private auth: AuthService, private eventoServ: EventoService, public dialog: MatDialog ) {}

  searchSessions(searchTerm) {
      this.eventoServ.searchSessions(searchTerm).subscribe
      (sessions => { 
       this.foundSessions = sessions
        console.log(this.foundSessions);
      })

      return  this.foundSessions;
  }


  openDialog(): void {
    
    let dialogRef = this.dialog.open(SimpleDialogComponent, {
      width: '250px',
     
      data: { 
        name: this.name, 
        foundSessions:this.foundSessions }
      
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
  
    });
  }



  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

@Component({
  selector: 'simple-modal',
  template: `
  <div id="{{ elementId }}">
  <div mat-dialog-content>
  <div class="list-group">
  <mat-list>
  <mat-list-item *ngFor="let session of data.foundSessions">
  <a class="list-group-item" [routerLink]="['/evento',session.eventId]">
  {{session.name}}
  </a>
  </mat-list-item>
  </mat-list>
  
</div>
  </div>
  <div mat-dialog-actions>
   {{data.name}}
    <button mat-button (click)="onNoClick()" tabindex="-1">Close</button>
  </div>
</div>
  `,
styles: [`
.modal-body { height:250px; overflow-y:scroll }
`]
})

export class SimpleDialogComponent {
 @Input() title: string;
 @Input() elementId: string;

  
    constructor(
      public dialogRef: MatDialogRef<SimpleDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) { console.log(data); }
     
    onNoClick(): void {
      this.dialogRef.close();
    }
  
}





/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
