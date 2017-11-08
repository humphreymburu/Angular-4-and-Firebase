import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.modules';


import { EventoComponent } from './evento.component';
import { EventoThumbnailComponent  }  from './evento-thumbnail.component';
import { EventoService } from './evento-service';
import { EventoRoutingModule } from './evento-routing.module';
import { EventoDetailComponent } from './+evento-detail/evento-detail.component';
import { EventoRouteActivator } from './+evento-detail/evento-router-activator.service';
import { EventoListResolver } from './evento-list-resolver.service';


console.log('`Detail` bundle loaded asynchronously');

@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    EventoComponent,
    EventoThumbnailComponent,
    EventoDetailComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    EventoRoutingModule
  ],
  providers: [ EventoService, EventoRouteActivator, EventoListResolver ]
})



export class EventoModule {
}
