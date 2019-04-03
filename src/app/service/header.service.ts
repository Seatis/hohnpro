import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class HeaderService {

  public headerStyle: Subject<string> = new Subject<string>();

  constructor() {
    
   }

  public setHeaderStyle(style: string): void {
    this.headerStyle.next(style);
  }

}
