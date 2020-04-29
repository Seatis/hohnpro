import {News} from './model/news.model';

export const htmlContent: string = `<p>Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit agna, endrerit sit amet, tincidunt ac, viverra sed, nulla. Donec porta diam eu massa. Quisque diam lorem, interdum vitae, dapibus ac, scelerisque vitae, pede. Donec eget tellus non erat lacinia fermentum.  Donec in velit vel ipsum auctor pulvinar. </p>
                  <p>Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipisMauris accumsan nulla vel diam. Sed in lacus ut enim adipiscing aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sollicitudin velit sed leo. </p>`

export const newsData: News[] = [
  {
    id: 1,
    cim: 'A családon belüli erőszakról',
    datum: new Date('2020-01-30T10:00:00'),
    htmlContent: `<p>Az országgyűlési képviselő véleménye a családon belüli erőszakról 2020.01.30.</p>
                  <p>Komló Média 2020.01.30.-i teljes adás:</p> 
                  <p><a href="http://komlomedia.hu/videok/video/2020013001?fbclid=IwAR2NhHruIVsEavNr9_pUKkmMh7n2XN2DYqmehdJCO6obAorYAKbmz581Zjo">http://komlomedia.hu/videok/video/2020013001?fbclid=IwAR2NhHruIVsEavNr9_pUKkmMh7n2XN2DYqmehdJCO6obAorYAKbmz581Zjo</a></p>`,
    kategoria: 'Hír',
    kepMainUrl: 'assets/images/news/202001301000.jpg',
    kepSecUrl: null,
    szerzo: 'Hohn Krisztina',
    videoUrl: 'https://www.youtube.com/embed/rTBuxDo4-sw',
    rovidLeiras: 'Az országgyűlési képviselő véleménye a családon belüli erőszakról.'
  },
  {
    id: 2,
    cim: 'A kormány miért hanyagolja el és zülleszti le az oktatást?',
    datum: new Date('2020-03-02T10:00:00'),
    htmlContent: `<p>Budapest, 2020. március 2., hétfő (MTI) - A Pedagógusok Demokratikus Szakszervezetéhez (PDSZ) hasonlóan egyszeri, 60 százalékos pedagógus-béremelést szorgalmaz. Hohn Krisztina szerint a sztrájktörvényt is módosítani kellene a pedagógusok érdekérvényesítésének növelése érdekében, valamint a minimálbérhez kellene igazítani a bértáblát. Hohn Krisztina hétfői budapesti sajtótájékoztatóján arra mutatott rá, hogy egy pályakezdő, főiskolai végzettségű tanár jövedelme a bértábla szerint már tavaly sem érte volna el a garantált bérminimumot, ha nem lett volna kötelező legalább arra a szintre felemelni, idén pedig már a mesterdiplomás pályakezdőkkel is ugyanezt történt. Hangsúlyozta: ennek az az oka, hogy míg a pedagógusbéreket évek óta nem rendezték, a minimálbért igen. A képviselő viccesnek ítélte a kormány által bejelentett 10 százalékos növelést "a brutális áremelkedésekhez képest". Rámutatott ugyanakkor arra, hogy az intézményvezetők és helyetteseik jövedelmét emelték, amivel csak a bérfeszültséget növelik. A politikus emlékeztetett: a PDSZ március 2-ig adott haladékot a kormánynak, hogy fogadja el javaslataikat, amelyekben a többi között az illetménytábla rendezését és a kötelező óraszám csökkentését szorgalmazzák. Hohn Krisztina szerint ezen intézkedések szükségesek a pedagógushiány mérsékléséhez, az elvándorlás lassításához.</p>`,
    kategoria: 'Hír',
    kepMainUrl: 'assets/images/news/default.jpg',
    kepSecUrl: null,
    szerzo: 'Hohn Krisztina',
    videoUrl: 'https://www.youtube.com/embed/Y5Pai37j8No',
    rovidLeiras: 'Hohn Krisztina napirend előtti felszólalása'
  },
  {
    id: 3,
    cim: 'Székely autonómia',
    datum: new Date('2020-02-27T10:00:00'),
    htmlContent: `<p>Egymillió aláírást kell összegyűjtenünk szerte Európából 2020. május 7-éig a nemzeti régiók érdekében. Nemzeti régiókon olyan tájegységeket értünk, amelyeket nemzeti, nyelvi, kulturális, vallási sajátosságok különböztetnek meg a szomszédos régióktól. Lehetnek ezek országok, kisebb közigazgatási egységek, vagy közigazgatási hatáskör nélküli vidékek, közösségek, amelyek erős kulturális, politikai és történelmi identitással rendelkeznek, népek, nemzetek, társadalmak, amelyek nem alkották meg saját államukat. Ennek ellenére erős politikai akarat hordozói az önrendelkezés elérésére."</p><p>Ezért A kohéziós politika a régiók egyenlőségéért és a regionális kultúrák fenntarthatóságáért című polgári kezdeményezés lehetőséget teremt baszkoknak, bretonoknak, flamandoknak, katalánoknak, korzikaiaknak, skótoknak, székelyeknek, walesieknek, észak-íreknek, a belgiumi német közösségnek és más, a kezdeményezés által érintett közösségnek, hogy nemzeti törekvéseiket európai szinten jelenítsék meg.</p>
                  <p>Segítsen egy aláírással:</p>
                  <p><a href="https://eci.ec.europa.eu/010/public/#/initiative">https://eci.ec.europa.eu/010/public/#/initiative</a></p>`,
    kategoria: 'Hír',
    kepMainUrl: 'assets/images/news/default.jpg',
    kepSecUrl: null,
    szerzo: 'Hohn Krisztina',
    videoUrl: 'https://www.youtube.com/embed/TNfK-a9Rtlk',
    rovidLeiras: 'Segítsük egy aláírással a székely autonómia törekvésrő szóló kezdeményezést!'
  },
  {
    id: 4,
    cim: 'A fiatalkorúakat érintő emberkereskedelem',
    datum: new Date('2020-02-28T10:00:00'),
    htmlContent: `<p>A fiatalkorúakat érintő emberkereskedelem Magyarországon is probléma.</p>`,
    kategoria: 'Hír',
    kepMainUrl: 'assets/images/news/default.jpg',
    kepSecUrl: null,
    szerzo: 'Hohn Krisztina',
    videoUrl: 'https://www.youtube.com/embed/7vqAR7s4QTg',
    rovidLeiras: 'A fiatalkorúakat érintő emberkereskedelem Magyarországon is probléma.'
  },
  {
    id: 5,
    cim: 'Karantén intézkedések',
    datum: new Date('2020-04-03T10:00:00'),
    htmlContent: `<p>Milyen intézkedéseket terveznek az önkéntes karantén alatti családon belüli erőszakkal szemben?</p>`,
    kategoria: 'Hír',
    kepMainUrl: 'assets/images/news/default.jpg',
    kepSecUrl: null,
    szerzo: 'Hohn Krisztina',
    videoUrl: 'https://www.youtube.com/embed/f1Y7bkk3YUg',
    rovidLeiras: 'Milyen intézkedéseket terveznek az önkéntes karantén alatti családon belüli erőszakkal szemben?'
  },
  {
    id: 6,
    cim: 'Kérdezzen kerek perc',
    datum: new Date('2020-04-21T10:00:00'),
    htmlContent: `<p>Kérdezzen bátran, és én legjobb tudásom szerint válaszolok!</p>
                  <p>Kattintson az alábbi linkre, és kérdéseit, véleményét felteheti a poszt alatt vagy privát üzenetben, illetve az élő bejelentkezés ideje alatt kommentben:</p>
                  <p><a href="https://facebook.com/ujkezdet.hu/posts/1090310091348575">https://facebook.com/ujkezdet.hu/posts/1090310091348575</a></p>`,
    kategoria: 'Hír',
    kepMainUrl: 'assets/images/news/20200421/202004211000.jpg',
    kepSecUrl: 'assets/images/news/20200421/202004211000_sec.jpg',
    szerzo: 'Hohn Krisztina',
    videoUrl: null,
    rovidLeiras: 'Kérdezzen bátran, és én legjobb tudásom szerint válaszolok!'
  },
  {
    id: 7,
    cim: 'Szegények és uzsorások',
    datum: new Date('2020-04-24T10:00:00'),
    htmlContent: `<p>Hogyan menti meg a szegényeket a kormány az uzsorásoktól járvány idején?</p>
                  <p>Hohn Krisztina azonnali kérdése 2020. ápr. 20.</p>
                  <p><a href="https://facebook.com/ujkezdet.hu/posts/1090310091348575">https://facebook.com/ujkezdet.hu/posts/1090310091348575</a></p>`,
    kategoria: 'Hír',
    kepMainUrl: 'assets/images/news/20200424/202004241000.jpg',
    kepSecUrl: 'assets/images/news/20200424/202004241000_sec.jpg',
    szerzo: 'Hohn Krisztina',
    videoUrl: 'https://www.youtube.com/embed/cL-MSp7oobY',
    rovidLeiras: 'Hogyan menti meg a szegényeket a kormány az uzsorásoktól járvány idején? Hohn Krisztina azonnali kérdése 2020. ápr. 20.'
  },
];

