import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../service/header.service';

@Component({
  selector: 'hohn-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  public ngOnInit(): void {
    this.headerService.setHeaderStyle('fixed-header');
  }

}
