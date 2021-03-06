import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from '../material.modules';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatDatepickerModule} from '@angular/material';
import { MatTabsModule } from '@angular/material';

import { EventoComponent } from './evento.component';
import { EventoThumbnailComponent  }  from './evento-thumbnail.component';
import { EventoService } from './evento-service';
import { EventoRoutingModule } from './evento-routing.module';
import { EventoDetailComponent } from './+evento-detail/evento-detail.component';
import { CreateComponent } from './create-event.component';
import { EventoRouteActivator } from './+evento-detail/evento-router-activator.service';
import { EventoListResolver } from './evento-list-resolver.service';
import { IEvento, ISession } from './shared/evento-model';
import { SessionListComponent } from './+evento-detail/session-list.component'
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { DurationPipe } from './shared/duration.pipe';
import { UpVoteComponent }  from './+evento-detail/upvote.component';
import { VoterService }  from '../+evento/+evento-detail/voter.services';

console.log('`Event and Detail` bundle loaded asynchronously');

@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    EventoComponent,
    EventoThumbnailComponent,
    EventoDetailComponent,
    CreateComponent,
    CollapsibleWellComponent,
    SessionListComponent,
    DurationPipe,
    UpVoteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatTabsModule,
    MaterialModule,
    EventoRoutingModule
  ],
  providers: [ EventoService,  VoterService, EventoRouteActivator, EventoListResolver ]
})



export class EventoModule {
}
