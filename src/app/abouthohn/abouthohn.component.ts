import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../service/header.service';
import { Router } from '@angular/router';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-abouthohn',
  templateUrl: './abouthohn.component.html',
  styleUrls: ['./abouthohn.component.css']
})
export class AbouthohnComponent implements OnInit {

  constructor(
    private headerService: HeaderService, 
    public tokenService: TokenService
    ) {}

  public ngOnInit(): void {
    this.tokenService.setToken();
    this.headerService.setHeaderStyle('style-2');
    let cDate: Date = new Date();
    console.log(new Date(cDate.getFullYear(), cDate.getMonth()+1, 0).getDate());
    console.log(new Date(new Date().setDate(0)).getDate());
    console.log(new Date(new Date().setDate(1)).getDate());
  }
}
