import {Component, OnInit} from '@angular/core';
import {HeaderService} from '../service/header.service';
import {TokenService} from '../service/token.service';
import {DomSanitizer} from '@angular/platform-browser';
import {SystemService} from '../service/system.service';
import {Event} from '../common/calendar/model/event.model';

@Component({
  selector: 'hohn-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  public eventList: Event[] = [];
  public currentYear: string = '';

  constructor(
    private headerService: HeaderService,
    public tokenService: TokenService,
    private sanitizer: DomSanitizer,
    private systemService: SystemService
  ) { }

  public ngOnInit(): void {
    this.tokenService.setToken();
    this.headerService.setHeaderStyle('style-2');
    this.setCurrentYear();
    this.initEvents();
  }

  private setCurrentYear(): void {
    this.currentYear = new Date().getFullYear().toString();
  }

  private initEvents(): void {
    this.eventList = this.systemService.getEvents().filter( (event: Event) => event.datum.getTime() > new Date().getTime());

  }

}
