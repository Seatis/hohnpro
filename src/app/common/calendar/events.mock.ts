import {Event} from './model/event.model';

export const Events: Event[] = [
  // {
  //   id: 1,
  //   datum: new Date('2021-07-29T22:00:00'),
  //   cim: 'Nyilvános vita a levegőtisztaság ügyében',
  //   url: '/event',
  //   hely: '1358 Bp, Széchenyi rkp. 19.',
  //   idopont: '10:00 – 12:00',
  //   kepUrl: 'assets/images/event/202005201000.jpg',
  //   htmlContent: `<p>Donec porta diam eu massa. Quisque diam lorem, interdum vitae, dapibus ac, scelerisque vitae, pede. Donec eget tellus non erat lacinia fermentum. Donec in velit vel ipsum auctor pulvinar. Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipis. Mauris accumsan nulla vel diam.</p>`
  // },
  // {
  //   id: 2,
  //   datum: new Date('2021-08-01T22:00:00'),
  //   cim: 'Jótékonysági est',
  //   url: '/event',
  //   hely: '1095 Bp, Komor Marcell u. 1.',
  //   idopont: '18:00 – 22:30',
  //   kepUrl: 'assets/images/event/202005281000.jpg',
  //   htmlContent: `<p>Donec porta diam eu massa. Quisque diam lorem, interdum vitae, dapibus ac, scelerisque vitae, pede. Donec eget tellus non erat lacinia fermentum. Donec in velit vel ipsum auctor pulvinar. Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipis. Mauris accumsan nulla vel diam.</p>`
  // },
  // {
  //   id: 3,
  //   datum: new Date('2021-08-16T22:00:00'),
  //   cim: 'Rossz Event',
  //   url: '/event',
  //   hely: '1095 Bp, Komor Marcell u. 1.',
  //   idopont: '18:00 – 22:30',
  //   kepUrl: 'assets/images/event/202005281000.jpg',
  //   htmlContent: `<p>Donec porta diam eu massa. Quisque diam lorem, interdum vitae, dapibus ac, scelerisque vitae, pede. Donec eget tellus non erat lacinia fermentum. Donec in velit vel ipsum auctor pulvinar. Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipis. Mauris accumsan nulla vel diam.</p>`
  // }
  {
    id: 1,
    datum: new Date('2022-02-12T14:00:00'),
    cim: 'Országgyűlési Választás 2022. - Ajánlásgyűjtés - Aszód',
    url: '/event',
    hely: '2170 Aszód - Lidl előtt',
    idopont: '14:00 – 18:00',
    kepUrl: 'assets/images/event/aszod.jpg',
    htmlContent: `<p>Országgyűlési Választás 2022. - Ajánlásgyűjtés.<br />Helypontosítás: <strong>Lidl előtt.</strong></p>`
  },
  {
    id: 2,
    datum: new Date('2022-02-19T06:00:00'),
    cim: 'Országgyűlési Választás 2022. - Ajánlásgyűjtés - Aszód',
    url: '/event',
    hely: '2170 Aszód - piac',
    idopont: '06:00 – 10:00',
    kepUrl: 'assets/images/event/aszod.jpg',
    htmlContent: `<p>Országgyűlési Választás 2022. - Ajánlásgyűjtés.<br />Helypontosítás: <strong>Kondoros tér, piac bejárat előtt.</strong></p>`
  },
  {
    id: 3,
    datum: new Date('2022-02-14T16:00:00'),
    cim: 'Országgyűlési Választás 2022. - Ajánlásgyűjtés - Galgamácsa',
    url: '/event',
    hely: '2183 Galgamácsa - Coop előtt',
    idopont: '16:00 – 18:00',
    kepUrl: 'assets/images/event/galgamacsa.jpg',
    htmlContent: `<p>Országgyűlési Választás 2022. - Ajánlásgyűjtés.<br />Helypontosítás: <strong>Coop előtt.</strong></p>`
  },
  {
    id: 4,
    datum: new Date('2022-02-12T10:00:00'),
    cim: 'Országgyűlési Választás 2022. - Ajánlásgyűjtés - Gödöllő',
    url: '/event',
    hely: '2100 Gödöllő - Főtér, Coop mellett',
    idopont: '10:00 – 17:00',
    kepUrl: 'assets/images/event/godollo.jpg',
    htmlContent: `<p>Országgyűlési Választás 2022. - Ajánlásgyűjtés.<br />Helypontosítás: <strong>Főtér, Coop mellett.</strong></p>`
  },
  {
    id: 5,
    datum: new Date('2022-02-12T10:00:00'),
    cim: 'Országgyűlési Választás 2022. - Ajánlásgyűjtés - Gödöllő',
    url: '/event',
    hely: '2100 Gödöllő - SPAR mellett Remsey Jenő Krt.',
    idopont: '10:00 – 13:00',
    kepUrl: 'assets/images/event/godollo_spar.jpg',
    htmlContent: `<p>Országgyűlési Választás 2022. - Ajánlásgyűjtés.<br />Helypontosítás: <strong>SPAR mellett Remsey Jenő Krt.</strong></p>`
  },
  {
    id: 6,
    datum: new Date('2022-02-13T10:00:00'),
    cim: 'Országgyűlési Választás 2022. - Ajánlásgyűjtés - Gödöllő',
    url: '/event',
    hely: '2100 Gödöllő - Főtér, Coop mellett',
    idopont: '10:00 – 16:00',
    kepUrl: 'assets/images/event/godollo.jpg',
    htmlContent: `<p>Országgyűlési Választás 2022. - Ajánlásgyűjtés.<br />Helypontosítás: <strong>Főtér, Coop mellett.</strong></p>`
  },
  {
    id: 7,
    datum: new Date('2022-02-13T10:00:00'),
    cim: 'Országgyűlési Választás 2022. - Ajánlásgyűjtés - Gödöllő',
    url: '/event',
    hely: '2100 Gödöllő - SPAR mellett Remsey Jenő Krt.',
    idopont: '10:00 – 13:00',
    kepUrl: 'assets/images/event/godollo_spar.jpg',
    htmlContent: `<p>Országgyűlési Választás 2022. - Ajánlásgyűjtés.<br />Helypontosítás: <strong>SPAR mellett Remsey Jenő Krt.</strong></p>`
  },
  {
    id: 8,
    datum: new Date('2022-02-14T09:00:00'),
    cim: 'Országgyűlési Választás 2022. - Ajánlásgyűjtés - Gödöllő',
    url: '/event',
    hely: '2100 Gödöllő - Főtér, Coop mellett',
    idopont: '09:00 – 13:00 és 14:00 - 17:00',
    kepUrl: 'assets/images/event/godollo.jpg',
    htmlContent: `<p>Országgyűlési Választás 2022. - Ajánlásgyűjtés.<br />Helypontosítás: <strong>Főtér, Coop mellett.</strong></p>`
  },
  {
    id: 9,
    datum: new Date('2022-02-15T09:00:00'),
    cim: 'Országgyűlési Választás 2022. - Ajánlásgyűjtés - Gödöllő',
    url: '/event',
    hely: '2100 Gödöllő - Főtér, Coop mellett',
    idopont: '09:00 – 13:00 és 14:00 - 17:00',
    kepUrl: 'assets/images/event/godollo.jpg',
    htmlContent: `<p>Országgyűlési Választás 2022. - Ajánlásgyűjtés.<br />Helypontosítás: <strong>Főtér, Coop mellett.</strong></p>`
  },
  {
    id: 10,
    datum: new Date('2022-02-16T09:00:00'),
    cim: 'Országgyűlési Választás 2022. - Ajánlásgyűjtés - Gödöllő',
    url: '/event',
    hely: '2100 Gödöllő - Főtér, Coop mellett',
    idopont: '09:00 – 13:00 és 14:00 - 17:00',
    kepUrl: 'assets/images/event/godollo.jpg',
    htmlContent: `<p>Országgyűlési Választás 2022. - Ajánlásgyűjtés.<br />Helypontosítás: <strong>Főtér, Coop mellett.</strong></p>`
  },
  {
    id: 11,
    datum: new Date('2022-02-17T09:00:00'),
    cim: 'Országgyűlési Választás 2022. - Ajánlásgyűjtés - Gödöllő',
    url: '/event',
    hely: '2100 Gödöllő - Főtér, Coop mellett',
    idopont: '09:00 – 13:00 és 14:00 - 17:00',
    kepUrl: 'assets/images/event/godollo.jpg',
    htmlContent: `<p>Országgyűlési Választás 2022. - Ajánlásgyűjtés.<br />Helypontosítás: <strong>Főtér, Coop mellett.</strong></p>`
  },
  {
    id: 12,
    datum: new Date('2022-02-18T09:00:00'),
    cim: 'Országgyűlési Választás 2022. - Ajánlásgyűjtés - Gödöllő',
    url: '/event',
    hely: '2100 Gödöllő - Főtér, Coop mellett',
    idopont: '09:00 – 13:00 és 14:00 - 17:00',
    kepUrl: 'assets/images/event/godollo.jpg',
    htmlContent: `<p>Országgyűlési Választás 2022. - Ajánlásgyűjtés.<br />Helypontosítás: <strong>Főtér, Coop mellett.</strong></p>`
  },
  {
    id: 13,
    datum: new Date('2022-02-19T09:00:00'),
    cim: 'Országgyűlési Választás 2022. - Ajánlásgyűjtés - Gödöllő',
    url: '/event',
    hely: '2100 Gödöllő - Főtér, Coop mellett',
    idopont: '09:00 – 13:00 és 14:00 - 17:00',
    kepUrl: 'assets/images/event/godollo.jpg',
    htmlContent: `<p>Országgyűlési Választás 2022. - Ajánlásgyűjtés.<br />Helypontosítás: <strong>Főtér, Coop mellett.</strong></p>`
  },
  {
    id: 14,
    datum: new Date('2022-02-15T16:00:00'),
    cim: 'Országgyűlési Választás 2022. - Ajánlásgyűjtés - Hévízgyörk',
    url: '/event',
    hely: '2192 Hévízgyörk - Coop előtt',
    idopont: '16:00 – 18:00',
    kepUrl: 'assets/images/event/hevizgyork.jpg',
    htmlContent: `<p>Országgyűlési Választás 2022. - Ajánlásgyűjtés.<br />Helypontosítás: <strong>Coop előtt.</strong></p>`
  },
  {
    id: 15,
    datum: new Date('2022-02-17T16:00:00'),
    cim: 'Országgyűlési Választás 2022. - Ajánlásgyűjtés - Iklad',
    url: '/event',
    hely: '2181 Iklad - Coop előtt',
    idopont: '16:00 – 18:00',
    kepUrl: 'assets/images/event/iklad.jpg',
    htmlContent: `<p>Országgyűlési Választás 2022. - Ajánlásgyűjtés.<br />Helypontosítás: <strong>Coop előtt.</strong></p>`
  },
  {
    id: 16,
    datum: new Date('2022-02-12T11:00:00'),
    cim: 'Országgyűlési Választás 2022. - Ajánlásgyűjtés - Isaszeg',
    url: '/event',
    hely: '2117 Isaszeg - körforgalomnál',
    idopont: '11:00 – 16:00',
    kepUrl: 'assets/images/event/isaszeg.jpg',
    htmlContent: `<p>Országgyűlési Választás 2022. - Ajánlásgyűjtés.<br />Helypontosítás: <strong>körforgalomnál</strong></p>`
  },
  {
    id: 17,
    datum: new Date('2022-02-13T11:00:00'),
    cim: 'Országgyűlési Választás 2022. - Ajánlásgyűjtés - Isaszeg',
    url: '/event',
    hely: '2117 Isaszeg - Sósperec Pékség előtt',
    idopont: '10:00 – 16:00',
    kepUrl: 'assets/images/event/isaszeg.jpg',
    htmlContent: `<p>Országgyűlési Választás 2022. - Ajánlásgyűjtés.<br />Helypontosítás: <strong>Sósperec Pékség előtt</strong></p>`
  },
  {
    id: 18,
    datum: new Date('2022-02-14T15:00:00'),
    cim: 'Országgyűlési Választás 2022. - Ajánlásgyűjtés - Isaszeg',
    url: '/event',
    hely: '2117 Isaszeg - TESCO parkoló bejárati út - Aulich utca sarok',
    idopont: '15:00 – 19:00',
    kepUrl: 'assets/images/event/isaszeg.jpg',
    htmlContent: `<p>Országgyűlési Választás 2022. - Ajánlásgyűjtés.<br />Helypontosítás: <strong>TESCO parkoló bejárati út - Aulich utca sarok</strong></p>`
  },
  {
    id: 19,
    datum: new Date('2022-02-15T15:00:00'),
    cim: 'Országgyűlési Választás 2022. - Ajánlásgyűjtés - Isaszeg',
    url: '/event',
    hely: '2117 Isaszeg - TESCO parkoló bejárati út - Aulich utca sarok',
    idopont: '15:00 – 19:00',
    kepUrl: 'assets/images/event/isaszeg.jpg',
    htmlContent: `<p>Országgyűlési Választás 2022. - Ajánlásgyűjtés.<br />Helypontosítás: <strong>TESCO parkoló bejárati út - Aulich utca sarok</strong></p>`
  },
  {
    id: 20,
    datum: new Date('2022-02-16T15:00:00'),
    cim: 'Országgyűlési Választás 2022. - Ajánlásgyűjtés - Isaszeg',
    url: '/event',
    hely: '2117 Isaszeg - TESCO parkoló bejárati út - Aulich utca sarok',
    idopont: '15:00 – 19:00',
    kepUrl: 'assets/images/event/isaszeg.jpg',
    htmlContent: `<p>Országgyűlési Választás 2022. - Ajánlásgyűjtés.<br />Helypontosítás: <strong>TESCO parkoló bejárati út - Aulich utca sarok</strong></p>`
  },
  {
    id: 21,
    datum: new Date('2022-02-17T06:00:00'),
    cim: 'Országgyűlési Választás 2022. - Ajánlásgyűjtés - Isaszeg',
    url: '/event',
    hely: '2117 Isaszeg - Sósperec Pékség előtt',
    idopont: '06:00 – 08:00',
    kepUrl: 'assets/images/event/isaszeg.jpg',
    htmlContent: `<p>Országgyűlési Választás 2022. - Ajánlásgyűjtés.<br />Helypontosítás: <strong>Sósperec Pékség előtt</strong></p>`
  },
  {
    id: 22,
    datum: new Date('2022-02-17T15:00:00'),
    cim: 'Országgyűlési Választás 2022. - Ajánlásgyűjtés - Isaszeg',
    url: '/event',
    hely: '2117 Isaszeg - TESCO parkoló bejárati út - Aulich utca sarok',
    idopont: '15:00 – 19:00',
    kepUrl: 'assets/images/event/isaszeg.jpg',
    htmlContent: `<p>Országgyűlési Választás 2022. - Ajánlásgyűjtés.<br />Helypontosítás: <strong>TESCO parkoló bejárati út - Aulich utca sarok</strong></p>`
  },
  {
    id: 23,
    datum: new Date('2022-02-16T16:00:00'),
    cim: 'Országgyűlési Választás 2022. - Ajánlásgyűjtés - Kartal',
    url: '/event',
    hely: '2173 Kartal - CBA előtt',
    idopont: '16:00 – 18:00',
    kepUrl: 'assets/images/event/kartal.jpg',
    htmlContent: `<p>Országgyűlési Választás 2022. - Ajánlásgyűjtés.<br />Helypontosítás: <strong>CBA előtt</strong></p>`
  },
  {
    id: 24,
    datum: new Date('2022-02-12T11:00:00'),
    cim: 'Országgyűlési Választás 2022. - Ajánlásgyűjtés - Kerepes',
    url: '/event',
    hely: '2144 Kerepes - Support Alapítvány',
    idopont: '11:00 – 16:00',
    kepUrl: 'assets/images/event/kerepes.jpg',
    htmlContent: `<p>Országgyűlési Választás 2022. - Ajánlásgyűjtés.<br />Helypontosítás: <strong>Support Alapítvány</strong></p>`
  },
  {
    id: 25,
    datum: new Date('2022-02-13T10:00:00'),
    cim: 'Országgyűlési Választás 2022. - Ajánlásgyűjtés - Kerepes',
    url: '/event',
    hely: '2144 Kerepes - Support Alapítvány',
    idopont: '10:00 – 16:00',
    kepUrl: 'assets/images/event/kerepes.jpg',
    htmlContent: `<p>Országgyűlési Választás 2022. - Ajánlásgyűjtés.<br />Helypontosítás: <strong>Support Alapítvány</strong></p>`
  },
  {
    id: 26,
    datum: new Date('2022-02-14T13:00:00'),
    cim: 'Országgyűlési Választás 2022. - Ajánlásgyűjtés - Kerepes',
    url: '/event',
    hely: '2144 Kerepes - Support Alapítvány',
    idopont: '13:00 – 16:00',
    kepUrl: 'assets/images/event/kerepes.jpg',
    htmlContent: `<p>Országgyűlési Választás 2022. - Ajánlásgyűjtés.<br />Helypontosítás: <strong>Support Alapítvány</strong></p>`
  },
  {
    id: 27,
    datum: new Date('2022-02-15T15:00:00'),
    cim: 'Országgyűlési Választás 2022. - Ajánlásgyűjtés - Kistarcsa',
    url: '/event',
    hely: '2143 Kistarcsa - Zöld ABC előtt',
    idopont: '15:00 – 18:00',
    kepUrl: 'assets/images/event/kistarcsa.jpg',
    htmlContent: `<p>Országgyűlési Választás 2022. - Ajánlásgyűjtés.<br />Helypontosítás: <strong>Zöld ABC előtt</strong></p>`
  },
  {
    id: 28,
    datum: new Date('2022-02-16T15:00:00'),
    cim: 'Országgyűlési Választás 2022. - Ajánlásgyűjtés - Kistarcsa',
    url: '/event',
    hely: '2143 Kistarcsa - Zöld ABC előtt',
    idopont: '15:00 – 18:00',
    kepUrl: 'assets/images/event/kistarcsa.jpg',
    htmlContent: `<p>Országgyűlési Választás 2022. - Ajánlásgyűjtés.<br />Helypontosítás: <strong>Zöld ABC előtt</strong></p>`
  },
  {
    id: 29,
    datum: new Date('2022-02-17T15:00:00'),
    cim: 'Országgyűlési Választás 2022. - Ajánlásgyűjtés - Kistarcsa',
    url: '/event',
    hely: '2143 Kistarcsa - Zöld ABC előtt',
    idopont: '15:00 – 18:00',
    kepUrl: 'assets/images/event/kistarcsa.jpg',
    htmlContent: `<p>Országgyűlési Választás 2022. - Ajánlásgyűjtés.<br />Helypontosítás: <strong>Zöld ABC előtt</strong></p>`
  },
  {
    id: 30,
    datum: new Date('2022-02-18T15:00:00'),
    cim: 'Országgyűlési Választás 2022. - Ajánlásgyűjtés - Kistarcsa',
    url: '/event',
    hely: '2143 Kistarcsa - Zöld ABC előtt',
    idopont: '15:00 – 18:00',
    kepUrl: 'assets/images/event/kistarcsa.jpg',
    htmlContent: `<p>Országgyűlési Választás 2022. - Ajánlásgyűjtés.<br />Helypontosítás: <strong>Zöld ABC előtt</strong></p>`
  },
  {
    id: 31,
    datum: new Date('2022-02-19T08:00:00'),
    cim: 'Országgyűlési Választás 2022. - Ajánlásgyűjtés - Kistarcsa',
    url: '/event',
    hely: '2143 Kistarcsa - Zöld ABC előtt',
    idopont: '08:00 – 12:00',
    kepUrl: 'assets/images/event/kistarcsa.jpg',
    htmlContent: `<p>Országgyűlési Választás 2022. - Ajánlásgyűjtés.<br />Helypontosítás: <strong>Zöld ABC előtt</strong></p>`
  },
  {
    id: 32,
    datum: new Date('2022-02-17T15:00:00'),
    cim: 'Országgyűlési Választás 2022. - Ajánlásgyűjtés - Mogyoród',
    url: '/event',
    hely: '2146 Mogyoród - HÉV állomás',
    idopont: '15:00 – 19:00',
    kepUrl: 'assets/images/event/mogyorod.jpg',
    htmlContent: `<p>Országgyűlési Választás 2022. - Ajánlásgyűjtés.<br />Helypontosítás: <strong>HÉV állomás</strong></p>`
  },
  {
    id: 33,
    datum: new Date('2022-02-18T15:00:00'),
    cim: 'Országgyűlési Választás 2022. - Ajánlásgyűjtés - Mogyoród',
    url: '/event',
    hely: '2146 Mogyoród - HÉV állomás',
    idopont: '15:00 – 19:00',
    kepUrl: 'assets/images/event/mogyorod.jpg',
    htmlContent: `<p>Országgyűlési Választás 2022. - Ajánlásgyűjtés.<br />Helypontosítás: <strong>HÉV állomás</strong></p>`
  },
  {
    id: 34,
    datum: new Date('2022-02-13T14:00:00'),
    cim: 'Országgyűlési Választás 2022. - Ajánlásgyűjtés - Szada',
    url: '/event',
    hely: '2111 Szada - Székely Bertalan út 14-17.',
    idopont: '14:00 – 17:00',
    kepUrl: 'assets/images/event/szada.jpg',
    htmlContent: `<p>Országgyűlési Választás 2022. - Ajánlásgyűjtés.<br />Helypontosítás: <strong>Nonna Cukrászda mellett</strong></p>`
  },
  {
    id: 35,
    datum: new Date('2022-02-14T15:00:00'),
    cim: 'Országgyűlési Választás 2022. - Ajánlásgyűjtés - Nagytarcsa',
    url: '/event',
    hely: '2142 Nagytarcsa - Polgármesteri Hivatallal szembeni parkoló',
    idopont: '15:00 – 18:00',
    kepUrl: 'assets/images/event/nagytarcsa.jpg',
    htmlContent: `<p>Országgyűlési Választás 2022. - Ajánlásgyűjtés.<br />Helypontosítás: <strong>Polgármesteri Hivatallal szembeni parkoló</strong></p>`
  },
  {
    id: 36,
    datum: new Date('2022-02-12T10:30:00'),
    cim: 'Országgyűlési Választás 2022. - Ajánlásgyűjtés - Gödöllő',
    url: '/event',
    hely: '2100 Gödöllő Palotakert 19. - Coop előtt',
    idopont: '10:30 – 12:00 és 14:00 - 17:00',
    kepUrl: 'assets/images/event/godollo_coop.jpg',
    htmlContent: `<p>Országgyűlési Választás 2022. - Ajánlásgyűjtés.<br />Helypontosítás: <strong>Palotakert 19. - Coop előtt</strong></p>`
  }
];
