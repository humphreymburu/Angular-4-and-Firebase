import {
  Component, Input
} from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template: `
    <mat-card>
    <h2> {{event?.name}}</h2>
    <div>Date: {{event?.date}}</div>
    <div>Date: {{event?.time}}</div>
    <div>Price: \${{event?.price}}</div>
    <div *ngIf = event?.location>
    <span>Location:{{event?.location?.address}}</span>
    <span class="pad-left">&nbsp;</span>
    <span>{{event?.location?.city}}, {{event?.location?.country}}</span>
    </div>
    <div *ngIf = event?.onlineUrl>
    Omline URL {{event?.onlineUrl}}
    </div>
    </mat-card>
    `,
    styles: [` 
     .pad-left { margin-left: 10px;
     }`]
})

export class EventsThumbnailComponent {
  @Input() event:any;
}
