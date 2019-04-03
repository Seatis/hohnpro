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
    private tokenService: TokenService,
    private router: Router
    ) {}

  public ngOnInit(): void {
    this.tokenService.setToken();
    this.headerService.setHeaderStyle('style-2');
  }
}
