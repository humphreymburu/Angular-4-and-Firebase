import { EventsListComponent }    from './events-list.component';
import { EventDetailsComponent }  from './event-details/event-details.component';
  
export const routes = [
   {  path: 'events',  component: EventsListComponent },
   {  path: 'event/:id', component: EventDetailsComponent }

];
