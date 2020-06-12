import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'hohn-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {

  @Input() public isWidget: boolean = true;

  constructor() { }

  public ngOnInit(): void {

  }

}
