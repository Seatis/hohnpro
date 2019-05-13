import { Component, OnInit, Input } from '@angular/core';
import { HeaderService } from '../service/header.service';
import { Router } from '@angular/router';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'hohn-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() public isIndexPage: boolean;

  public headerStyle: string = 'fixed-header';

  constructor(
    private headerService: HeaderService,
    public tokenService: TokenService
    ) { }

  public ngOnInit(): void {
    this.headerService.headerStyle.subscribe( newStyle => this.headerStyle = newStyle);
  }
  
}
