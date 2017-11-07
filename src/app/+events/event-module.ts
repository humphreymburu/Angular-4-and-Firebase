import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { MaterialModule } from '../material.modules';
 
import { EventsListComponent }    from './events-list.component';
import { EventDetailsComponent }  from './event-details/event-details.component';
import { EventsThumbnailComponent  }  from './event-thumbnail.component';
 
import { EventService  } from './event-service';

import { RouterModule } from '@angular/router';
import { routes } from './event-routes';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    EventsListComponent,
    EventDetailsComponent,
    EventsThumbnailComponent 
  ],
  providers: [ EventService ]
})
export class EventModule {}
