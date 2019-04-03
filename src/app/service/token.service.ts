import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {

  public loaded: boolean = false;

  constructor() { }

  public setToken() {
    if (!sessionStorage.getItem('token')) {
      this.loaded = false;
      sessionStorage.setItem('token', '1');
      this.refresh();
    } else {
      this.loaded = true;
      sessionStorage.removeItem('token');
    }
   }

   refresh() {
    window.location.reload();
  }
}
