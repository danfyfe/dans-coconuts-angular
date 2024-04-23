import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventsService } from './events/events.service';
import { IEvent } from './events/interfaces';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [EventsService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private eventsService: EventsService) {}

  public events: IEvent[] = [];

  ngOnInit() {
    console.log('events', this.events)
    this.eventsService.getAllEvents()
      .subscribe((data) => this.events = data)
  }
}
