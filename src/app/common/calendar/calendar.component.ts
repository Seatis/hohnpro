import { Component, OnInit } from '@angular/core';

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
  public calendarDataList: CalendarDataModel[] = [];

  constructor() { }

  public ngOnInit(): void {
    let count: number = 3;
    let now: Date = new Date();
    // let startDate: Date = now;
    // for (let i = 0; i < count; i++) {
    //   startDate = this.determineLastMonthDate(startDate);
    // }
    // for (let i = 0; i < 2*count+1; i++) {
    //   if (i==0) {
    //     this.calendarDataList.push({date: startDate, monthData: this.config(startDate)});
    //   } else {
    //     this.calendarDataList.push({date: this.determineNextMonthDate(this.calendarDataList[this.calendarDataList.length - 1].date), monthData: this.config(this.determineNextMonthDate(this.calendarDataList[this.calendarDataList.length - 1].date))});
    //   }
      
    // }
    this.calendarDataList.push({date: now, monthData: this.config(now)});
    for (let i = 0; i < 3; i++) {
      this.calendarDataList.push({date: this.determineNextMonthDate(this.calendarDataList[this.calendarDataList.length - 1].date), monthData: this.config(this.determineNextMonthDate(this.calendarDataList[this.calendarDataList.length - 1].date))});
    }
    // this.calendarDataList.push({date: this.determineLastMonthDate(now), monthData: this.config(this.determineLastMonthDate(now))});
    // for (let i = 0; i < 2; i++) {
    //   this.calendarDataList.push({date: this.determineLastMonthDate(this.calendarDataList[this.calendarDataList.length - 1].date), monthData: this.config(this.determineLastMonthDate(this.calendarDataList[this.calendarDataList.length - 1].date))});
    // }
  }

  private config(currentDate: Date):  Map<number, CalendarEventModel[]> {
    // let currentDate: Date = new Date();
        if (currentDate.getMonth() == 11) {

        }
        let limit: number = new Date(currentDate.getFullYear(), currentDate.getMonth()+1, 0).getDate();
        let calendarData = new Map<number, CalendarEventModel[]>();
        let day: number = 1;
        for (let j = 0; j < Math.ceil(limit / 7); j++) {
            let calendarDataRow: CalendarEventModel[] = [];
            for (let i = 0; i < 7; i++) {
                let dateTmp: Date = null;
                let urlTmp: string = null;
                let tooltipTmp: string = null;
                events.forEach( (event: EventModel) => {
                    if (event.date.getFullYear() == currentDate.getFullYear() && event.date.getMonth() == currentDate.getMonth() && event.date.getDate() == day) {
                        dateTmp = event.date;
                        urlTmp = event.url;
                        tooltipTmp = event.title;
                    }
                });
                calendarDataRow.push(<CalendarEventModel>{
                    day: day <= limit ? (day).toString() : '',
                    date: dateTmp,
                    url: urlTmp,
                    tooltip: tooltipTmp
                });
                day++;
            }
            calendarData.set(j, calendarDataRow);
        }
        console.log(calendarData);
        return calendarData;
    // this.calendarDataList = [{date: currentDate, monthData: calendarData}];
  }

  private determineNextMonthDate(currentDate: Date): Date {
    if (currentDate.getMonth() == 11) {
      return new Date(currentDate.getFullYear() + 1, 0, 1);
    }
    return new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
  }

  private determineLastMonthDate(currentDate: Date): Date {
    currentDate.setMonth(currentDate.getMonth() - 1);
    return currentDate;
  }
  

}

export interface EventModel {
  id?: number;
  date: Date;
  title: string;
  url: string;
}

export interface CalendarEventModel {
  day: string;
  date: Date;
  tooltip: string;
  url: string;
}

export interface CalendarDataModel {
  date: Date;
  monthData: Map<number, CalendarEventModel[]>;
}


export const events: EventModel[] = [
  {id: 1, date: new Date('2019-05-03T03:00:00'), title: 'Event first', url: 'https://www.github.com/'},
  {id: 2, date: new Date('2019-05-12T03:00:00'), title: 'Event second', url: 'https://www.github.com/'},
  {id: 3, date: new Date('2019-05-20T03:00:00'), title: 'Event third', url: 'https://www.github.com/'},
  {id: 4, date: new Date('2019-04-23T03:00:00'), title: 'Event third', url: 'https://www.github.com/'},
  {id: 5, date: new Date('2019-06-07T03:00:00'), title: 'Event fourth', url: 'https://www.github.com/'},
  {id: 6, date: new Date('2019-06-18T03:00:00'), title: 'Event fifth', url: 'https://www.github.com/'}
];
