import {Component, OnInit} from '@angular/core';
import {Event} from '../common/calendar/model/event.model';
import {Events} from '../common/calendar/events.mock';
import {HohnUtil} from '../common/hohn.util';
import {HeaderService} from '../service/header.service';
import {TokenService} from '../service/token.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AktivistaModel} from '../index/model/aktivista.model';
import {PostResponse} from '../common/model/postresponse.model';
import {MessageService} from 'primeng/api';
import {SystemService} from '../service/system.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'hohn-stopvecsey',
  templateUrl: './stopvecsey.component.html',
  styleUrls: ['./stopvecsey.component.css']
})
export class StopvecseyComponent implements OnInit {

  public events: Event[] = Events;
  public facebookUrl: string = HohnUtil.getFacebookUrl();
  public instaUrl: string = HohnUtil.getInstaUrl();
  public instaHomeUrl: string = HohnUtil.getInstaHomeUrl();

  public aktivistaForm: FormGroup;
  private aktivistaModel: AktivistaModel;

  constructor(
    private headerService: HeaderService,
    public tokenService: TokenService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private systemService: SystemService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        if (params['id'] !== 'stopvecseytest789') {
          this.router.navigate(['/']);
        } else {
          this.tokenService.setToken();
          this.headerService.setHeaderStyle('style-2');
        }
      }
    );


    this.aktivistaForm = this.formBuilder.group({
      'nev': [''],
      'iranyitoszam': ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      'telepules': [''],
      'cim': [''],
      'email': [''],
      'telefonszam': ['', [Validators.required, Validators.pattern('^[\+]?[0-9\-/ ()]*')]]
    });


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
      //console.log(body);
      this.systemService.postAktivistaForm(body).subscribe((response: PostResponse) => {
        if (!response.error) {
          this.messageService.add({severity: 'success', summary: 'Köszönjük!', detail: 'Jelentkezését fogadtuk, munkatársunk keresni fogja.'});
          this.aktivistaForm.reset();
        } else {
          this.messageService.add({severity: 'error', summary: 'Sikertelen!', detail: 'A jelentkezése háttérrendszeri hiba miatt nem valósult meg, kérem próbálja újra később!'});
        }
        console.log(response);
      });
    }
  }

  private checkValidForm(): boolean {
    if (this.aktivistaForm.controls.iranyitoszam.value && this.aktivistaForm.controls.iranyitoszam.invalid) {
      this.messageService.add({severity: 'error', summary: 'Figyelem!', detail: 'Az irányítószám kizárólag számokból állhat!'});
      return false;
    } else if (this.aktivistaForm.controls.email.value && this.aktivistaForm.controls.email.invalid) {
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
