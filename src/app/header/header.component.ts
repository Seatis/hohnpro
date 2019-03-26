import { Component, OnInit, Input } from '@angular/core';
import { HeaderService } from '../service/header.service';

@Component({
  selector: 'hohn-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() public isIndexPage: boolean;

  public headerStyle: string = 'fixed-header';

  constructor(private headerService: HeaderService) { }

  public ngOnInit(): void {
    this.headerService.headerStyle.subscribe( newStyle => this.headerStyle = newStyle);
  }

}
