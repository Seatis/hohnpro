import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hohn-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() public isIndexPage: boolean;

  constructor() { }

  public ngOnInit(): void {
  }

}
