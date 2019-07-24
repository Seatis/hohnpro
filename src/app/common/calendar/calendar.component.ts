import {Component, OnInit} from '@angular/core';
import {Event} from './model/event.model';
import {CalendarEvent} from './model/calendar.event.model';
import {CalendarData} from './model/calendar.data.model';
import {Events} from './events.mock';

@Component({
  selector: 'hohn-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  public monthNames: string[] = [
    'Január', 'Február', 'Március', 'Április', 'Május', 'Június',
    'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'
  ];
  public calendarDataList: CalendarData[] = [];

  constructor() { }

  public ngOnInit(): void {
    const now: Date = new Date();
    this.calendarDataList.push({date: now, monthData: this.config(now)});
    for (let i = 0; i < 6; i++) {
      this.calendarDataList.push({
        date: this.determinateNextMonthDate(this.calendarDataList[this.calendarDataList.length - 1].date),
        monthData: this.config(this.determinateNextMonthDate(this.calendarDataList[this.calendarDataList.length - 1].date))
      });
    }
  }

  private config(currentDate: Date):  Map<number, CalendarEvent[]> {
        const limit: number = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
        const calendarData = new Map<number, CalendarEvent[]>();
        let day: number = 1;
        for (let j = 0; j < Math.ceil(limit / 7); j++) {
            const calendarDataRow: CalendarEvent[] = [];
            for (let i = 0; i < 7; i++) {
                let dateTmp: Date = null;
                let urlTmp: string = null;
                let tooltipTmp: string = null;
                Events.forEach( (event: Event) => {
                    if (
                      event.date.getFullYear() === currentDate.getFullYear() &&
                      event.date.getMonth() === currentDate.getMonth() &&
                      event.date.getDate() === day
                    ) {
                        dateTmp = event.date;
                        urlTmp = event.url;
                        tooltipTmp = event.title;
                    }
                });
                calendarDataRow.push(<CalendarEvent>{
                    day: day <= limit ? (day).toString() : '',
                    date: dateTmp,
                    url: urlTmp,
                    tooltip: tooltipTmp
                });
                day++;
            }
            calendarData.set(j, calendarDataRow);
        }
        return calendarData;
  }

  private determinateNextMonthDate(currentDate: Date): Date {
    if (currentDate.getMonth() === 11) {
      return new Date(currentDate.getFullYear() + 1, 0, 1);
    }
    return new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
  }

}
