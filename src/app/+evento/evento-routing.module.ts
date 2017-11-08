import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { EventoComponent }    from './evento.component';
import { EventoDetailComponent }  from './+evento-detail/evento-detail.component';
import { NoContentComponent } from '../no-content';
import { EventoRouteActivator } from './+evento-detail/evento-router-activator.service';
import { EventoListResolver } from './evento-list-resolver.service';

const EventoRoutes: Routes = [
  {  path: 'eventos', redirectTo: '/eventos' },
  {  path: 'evento/:id', redirectTo: '/evento/:id' },
  {  path: 'eventos',  component: EventoComponent, resolve:{events:EventoListResolver} },
  {  path: 'evento/:id', component: EventoDetailComponent, 
   canActivate:[EventoRouteActivator] },
 
  
];

@NgModule({
  imports: [
    RouterModule.forChild(EventoRoutes)
  ],
  exports: [
    RouterModule
  ]
  ,
  providers: [
   EventoRouteActivator

  ]
})
export class EventoRoutingModule { }

