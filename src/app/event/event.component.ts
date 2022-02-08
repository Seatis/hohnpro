import {Component, OnInit} from '@angular/core';
import {HeaderService} from '../service/header.service';
import {TokenService} from '../service/token.service';
import {DomSanitizer} from '@angular/platform-browser';
import {SystemService} from '../service/system.service';
import {Event} from '../common/calendar/model/event.model';
import {ddSelectItem} from '../common/tweet/tweet.component';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'hohn-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  public eventList: Event[] = [];
  public currentYear: string = '';
  public days = ['Vasárnap', 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat'];


  public telepulesLista: SelectItem[] = [];
  public telepulesStrLista: string[] = [];

  public selectedTelepules: ddSelectItem;

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
    this.fillDropDown();
  }

  public change(event$: SelectItem): void {
    if (!!event$) {
      this.eventList = this.systemService.getEvents()
        .filter( (event: Event) => event.datum.getTime() > new Date().getTime() && event.hely.includes(this.selectedTelepules.value))
        .sort((a, b) => (new Date(a.datum).getTime() > new Date(b.datum).getTime() ? 1 : -1));
    } else {
      this.initEvents();
    }
  }

  private setCurrentYear(): void {
    this.currentYear = new Date().getFullYear().toString();
  }

  private initEvents(): void {
    this.eventList = this.systemService.getEvents()
      .filter( (event: Event) => event.datum.getTime() > new Date().getTime())
      .sort((a, b) => (new Date(a.datum).getTime() > new Date(b.datum).getTime() ? 1 : -1));

  }

  private fillDropDown(): void {
    this.systemService.getEvents()
      .filter( (event: Event) => event.datum.getTime() > new Date().getTime())
      .forEach((event: Event) => {
        const telepules: string = EventComponent.getTelepules(event.hely);
        if (!this.telepulesStrLista.includes(telepules)) {
          this.telepulesStrLista.push(telepules);
        }
      });
    this.telepulesStrLista.sort((a, b) => (a > b ? 1 : -1));
    this.telepulesStrLista.forEach((telepules: string) => {
          this.telepulesLista.push({label: telepules, value: telepules});
    });
  }

  private static getTelepules(hely: string): string {
    return hely.split('-')[0].substr(5);
  }

}
