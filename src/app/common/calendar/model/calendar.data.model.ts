import {CalendarEvent} from './calendar.event.model';

export interface CalendarData {
  date: Date;
  monthData: Map<number, CalendarEvent[]>;
}
