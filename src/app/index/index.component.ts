import {Component, OnInit} from '@angular/core';
import {HeaderService} from '../service/header.service';
import {TokenService} from '../service/token.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppValidators} from '../utils/validators.utils';
import {ActivatedRoute} from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'hohn-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public showPopUp: boolean = false;
  public aktivistaForm: FormGroup;

  public isEnabledTestButton: boolean = false;

  constructor(private headerService: HeaderService, public tokenService: TokenService, private formBuilder: FormBuilder, private route: ActivatedRoute, private messageService: MessageService) {

  }

  public ngOnInit(): void {
    this.tokenService.setToken();
    this.headerService.setHeaderStyle('fixed-header');
    this.isEnabledTestButton = false;
    this.aktivistaForm = this.formBuilder.group({
      'nev': [''],
      'cim': [''],
      'email': [''],
      'telefonszam': ['', [Validators.required, Validators.pattern('^[\+]?[0-9\-/ ()]*')]],
      'reszletek' : ['']
    });

    this.route.queryParams.subscribe(
      params => {
        if (!!params['id'] && params['id'] === 'popuptest789') {
          this.isEnabledTestButton= true;
        }
      }
    );
  }

  public enablePopUp(): void {
    this.showPopUp = true;
  }

  public postForm(): void {
    if (this.checkValidForm()) {
      console.log(this.aktivistaForm.value);
    }
  }

  private checkValidForm(): boolean {
    if (this.aktivistaForm.controls.email.value && this.aktivistaForm.controls.email.invalid) {
      this.messageService.add({severity: 'error', summary: 'Figyelem!', detail: 'Az email-cím formátuma nem megfelelő!'});
      return false;
    } else if (this.aktivistaForm.controls.telefonszam.value && this.aktivistaForm.controls.telefonszam.invalid) {
      this.messageService.add({severity: 'error', summary: 'Figyelem!', detail: 'Érvénytelen telefonszám!'});
      return false;
    } else if (this.aktivistaForm.invalid) {
      this.messageService.add({severity: 'error', summary: 'Figyelem!', detail: 'A csillaggal jelölt mezők kitöltése kötelező!'});
      return false;
    } else {
      return true;
    }
  }

}
