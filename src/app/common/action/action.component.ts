import {Component, OnInit} from '@angular/core';
import {HohnUtil} from '../hohn.util';

@Component({
  selector: 'hohn-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  public facebookUrl: string = HohnUtil.getFacebookUrl();
  public youtubeChannelUrl: string = HohnUtil.getYoutubeChannelUrl();

  constructor() { }

  public ngOnInit(): void {

  }

}
