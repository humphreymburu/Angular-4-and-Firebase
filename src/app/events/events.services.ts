import { Injectable } from '@angular/core';

import { EVENTS }  from './events';

@Injectable()
export class EventsService {
    getEvents() {
        return EVENTS;
    }
}

