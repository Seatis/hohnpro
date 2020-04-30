import {Component, OnInit} from '@angular/core';
import {SystemService} from '../service/system.service';
import {HeaderService} from '../service/header.service';
import {TokenService} from '../service/token.service';

@Component({
  selector: 'hohn-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  constructor(private headerService: HeaderService,
              public tokenService: TokenService,
              private systemService: SystemService
  ) { }

  public ngOnInit(): void {
    this.tokenService.setToken();
    this.headerService.setHeaderStyle('style-2');

  }



}
