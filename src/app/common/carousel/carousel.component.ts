import {Component, OnInit} from '@angular/core';
import {CarouselMock} from './carosusel.mock';
import {Carousel} from './model/carousel.model';

@Component({
  selector: 'hohn-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  public carouselMock: Carousel[] = CarouselMock;

  constructor() { }

  public ngOnInit(): void {

  }

}
