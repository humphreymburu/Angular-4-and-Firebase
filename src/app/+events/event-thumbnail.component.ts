import {
  Component, Input
} from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template: `
    <mat-card>
    <div [routerLink] ="['/events', event.id]">
    <h2> {{event?.name}}</h2>
    <div>Date: {{event?.date}}</div>
    <div [ngClass]="getStartTimeClass()" [ngSwitch] = "event?.time">
    Time: {{event?.time}}
    <span *ngSwitchCase="'8:00 am'">, Earley Start</span>
    <span *ngSwitchCase="'10:00 am'">, Late Start</span>
    <span *ngSwitchDafault> (normal-start)</span>

    </div>
    <div>Price: \${{event?.price}}</div>
    <div *ngIf = event?.location>
    <span>Location:{{event?.location?.address}}</span>
    <span class="pad-left">&nbsp;</span>
    <span>{{event?.location?.city}}, {{event?.location?.country}}</span>
    </div>
    <div *ngIf = event?.onlineUrl>
    Online URL {{event?.onlineUrl}}
    </div>
    </div>
    </mat-card>
    `,
    styles: [` 
     .pad-left { 
      margin-left: 10px;
      }
     .green {
      color: #e91e63 !important;}  
     .bold {
         font-weight: bold;}
    `]
})

export class EventsThumbnailComponent {
  @Input() event:any;

  getStartTimeClass() {
      const isEarly = this.event && this.event.time === '8:00 am';
      return {green: isEarly,  bold: isEarly };
      
  }

}
