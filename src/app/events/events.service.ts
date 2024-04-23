import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEvent } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private _eventsUrl: string = 'http://www.miamibeachapi.com/rest/a.pi/event-categories/list';

  constructor(private http: HttpClient) {}
  
  getAllEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(this._eventsUrl);
  }
}
