import {Component, OnInit} from '@angular/core';
import {HeaderService} from '../service/header.service';
import {TokenService} from '../service/token.service';
import {Events} from '../common/calendar/events.mock';
import {Event} from '../common/calendar/model/event.model';
import {HohnUtil} from '../common/hohn.util';

@Component({
  selector: 'app-abouthohn',
  templateUrl: './abouthohn.component.html',
  styleUrls: ['./abouthohn.component.css']
})
export class AbouthohnComponent implements OnInit {

  public events: Event[] = Events;
  public facebookUrl: string = HohnUtil.getFacebookUrl();
  public instaHomeUrl: string = HohnUtil.getInstaHomeUrl;

  constructor(
    private headerService: HeaderService,
    public tokenService: TokenService
    ) {}

  public ngOnInit(): void {
    this.tokenService.setToken();
    this.headerService.setHeaderStyle('style-2');
    const cDate: Date = new Date();
    console.log(new Date(cDate.getFullYear(), cDate.getMonth()+1, 0).getDate());
    console.log(new Date(new Date().setDate(0)).getDate());
    console.log(new Date(new Date().setDate(1)).getDate());
  }
}
