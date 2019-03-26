import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../service/header.service';

@Component({
  selector: 'app-abouthohn',
  templateUrl: './abouthohn.component.html',
  styleUrls: ['./abouthohn.component.css']
})
export class AbouthohnComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  public ngOnInit(): void {
    this.headerService.setHeaderStyle('style-2');
  }

}
