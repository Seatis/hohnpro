import {Component, OnInit} from '@angular/core';
import {HeaderService} from '../service/header.service';
import {TokenService} from '../service/token.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {MessageService} from 'primeng/api';
import {AktivistaModel} from './model/aktivista.model';
import {SystemService} from '../service/system.service';
import {PostResponse} from '../common/model/postresponse.model';

@Component({
  selector: 'hohn-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public showPopUp: boolean = false;
  public aktivistaForm: FormGroup;

  public isEnabledTestButton: boolean = false;

  private aktivistaModel: AktivistaModel;

  constructor(
    private headerService: HeaderService,
    public tokenService: TokenService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private systemService: SystemService) {
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
      this.aktivistaModel = <AktivistaModel> this.aktivistaForm.value;
      this.aktivistaModel.datum = new Date().toLocaleString();
      if (!!this.aktivistaForm.get('reszletek') && !this.aktivistaForm.get('reszletek').value) {
        this.aktivistaModel.reszletek = 'Nem töltötte ki! (rendszerüzenet)';
      }
      const body: string = JSON.stringify(this.aktivistaModel);
      this.systemService.postAktivistaForm(body).subscribe((response: PostResponse) => {
        if (!response.error) {
          this.messageService.add({severity: 'success', summary: 'Köszönjük!', detail: 'Jelentkezését fogadtuk, munkatársunk keresni fogja.'});
          this.aktivistaForm.reset();
        } else {
          this.messageService.add({severity: 'error', summary: 'Sikertelen!', detail: 'A jelentkezése háttérrendszeri hiba miatt nem valósult meg, kérem próbálja újra később!'});
        }
        console.log(response);
        this.showPopUp = false;
      });
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
