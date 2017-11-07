import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { EventService } from "../event-service";




@Component({
    templateUrl: './event-details.component.html',
    styles: [`
    .event-img: { height: 100px; }
    `]
})





export class EventDetailsComponent implements OnInit {
   event:any;
    constructor(
        private eventService: EventService, 
        private router: Router, 
        private route: ActivatedRoute) {}
    
 ngOnInit() {
   this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  
    };

    
}
