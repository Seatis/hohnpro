import {Component, OnInit} from '@angular/core';
import {Event} from '../calendar/model/event.model';
import {SystemService} from '../../service/system.service';

@Component({
  selector: 'hohn-eventfeed',
  templateUrl: './eventfeed.component.html',
  styleUrls: ['./eventfeed.component.css']
})
export class EventfeedComponent implements OnInit {


  public eventList: Event[] = [];

  public monthSortList: string[] = ['JAN', 'FEB', 'MÁR', 'ÁPR', 'MÁJ', 'JÚN', 'JÚL', 'AUG', 'SZEP', 'OKT', 'NOV', 'DEC'];

  constructor(private systemService: SystemService) { }

  public ngOnInit(): void {
    this.initEvents();
  }

  private initEvents(): void {
    this.eventList = this.systemService.getEvents()
      .filter( (event: Event) => event.datum.getTime() > new Date().getTime())
      .sort(function(a,b){
        return new Date(a.datum).getTime() - new Date(b.datum).getTime();
      }).slice(0, 2);
  }

}
