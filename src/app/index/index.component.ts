import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../service/header.service';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { DynamicScriptLoaderService } from '../service/dynamic-script-loader.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'hohn-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  private mySubscription: Subscription;

  private loaded: boolean = true;
  constructor(private headerService: HeaderService, private tokenService: TokenService, private router: Router, private dynamicScriptLoader: DynamicScriptLoaderService) { 
    
  }

  public ngOnInit(): void {
    this.tokenService.setToken();
    this.headerService.setHeaderStyle('fixed-header');
  }

  
  
}
