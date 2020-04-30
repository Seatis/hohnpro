import {Component, OnInit} from '@angular/core';
import {SystemService} from '../../service/system.service';
import {Support} from './model/support.model';

@Component({
  selector: 'hohn-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {


  public supportList: Support[] = [];

  constructor(private systemService: SystemService) { }

  public ngOnInit(): void {
    this.initSupports();
  }

  private initSupports(): void {
    this.supportList = this.systemService.getSupports();
  }

}
