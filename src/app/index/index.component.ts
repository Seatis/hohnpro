import {Component, OnInit} from '@angular/core';
import {HeaderService} from '../service/header.service';
import {TokenService} from '../service/token.service';

@Component({
  selector: 'hohn-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private headerService: HeaderService, public tokenService: TokenService) {

  }

  public ngOnInit(): void {
    this.tokenService.setToken();
    this.headerService.setHeaderStyle('fixed-header');
  }

}
