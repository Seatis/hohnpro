import {CalendarEventModel} from '../calendar.component';

export interface CalendarData {
  date: Date;
  monthData: Map<number, CalendarEventModel[]>;
}
