import {
  Component,
  OnInit,
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

/**
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

import { EventoService } from './evento-service';


console.log('`Detail` component loaded asynchronously');

@Component({
  selector: 'detail',
  template: `
    <div>
    <h1>Upcoming Tukio 2 Events</h1>
    <hr/>
    <evento-thumbnail *ngFor="let event of events" [event] = "event"></evento-thumbnail>
    </div>
  `,
})
export class EventoComponent implements OnInit {

events: any[];

   constructor(private eventService: EventoService, private route: ActivatedRoute) {

   }

    ngOnInit() {
     //this.eventService.getEvents().subscribe(events => {this.events = events});
     this.events = this.route.snapshot.data['events']
   }

}
