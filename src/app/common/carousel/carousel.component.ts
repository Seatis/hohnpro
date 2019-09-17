import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'hohn-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  public thing = {name: 'bar'};
  constructor() { }

  public ngOnInit(): void {

  }

}
