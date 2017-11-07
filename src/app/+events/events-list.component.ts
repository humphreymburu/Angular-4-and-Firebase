import {
  Component,
  OnInit
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { EventService } from './event-service';

@Component({
    selector: 'events-list',
    template: `
    <div>
    <h1>Upcoming Tukio 2 Events</h1>
    <hr/>
    <event-thumbnail *ngFor="let event of events" [event] = "event"></event-thumbnail>
    </div>
    `
})

export class EventsListComponent implements OnInit {
   events: any[];

   constructor(private eventService: EventService) {

   }

   public ngOnInit() {
     this.events = this.eventService.getEvents();
   }
}

