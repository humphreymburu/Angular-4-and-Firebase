import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { EventoComponent }    from './evento.component';
import { EventoDetailComponent }  from './+evento-detail/evento-detail.component';

const EventoRoutes: Routes = [
  {  path: 'eventos', redirectTo: '/eventos' },
  {  path: 'evento/:id', redirectTo: '/evento/:id' },
  {  path: 'eventos',  component: EventoComponent },
  {  path: 'evento/:id', component: EventoDetailComponent }

];

@NgModule({
  imports: [
    RouterModule.forChild(EventoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class EventoRoutingModule { }

