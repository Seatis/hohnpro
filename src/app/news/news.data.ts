import {News} from './model/news.model';
import {NewsCategoryKeys} from './news.category.keys';

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
    kategoria: NewsCategoryKeys.MEDIA,
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
    kategoria: NewsCategoryKeys.PARLAMENTI_FELSZOLALAS,
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
    kategoria: NewsCategoryKeys.PARLAMENTI_FELSZOLALAS,
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
    kategoria: NewsCategoryKeys.PARLAMENTI_FELSZOLALAS,
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
    kategoria: NewsCategoryKeys.PARLAMENTI_FELSZOLALAS,
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
    kategoria: NewsCategoryKeys.EGYEB_HIR,
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
    kategoria: NewsCategoryKeys.PARLAMENTI_FELSZOLALAS,
    kepMainUrl: 'assets/images/news/20200424/202004241000.jpg',
    kepSecUrl: 'assets/images/news/20200424/202004241000_sec.jpg',
    szerzo: 'Hohn Krisztina',
    videoUrl: 'https://www.youtube.com/embed/cL-MSp7oobY',
    rovidLeiras: 'Hogyan menti meg a szegényeket a kormány az uzsorásoktól járvány idején? Hohn Krisztina azonnali kérdése 2020. ápr. 20.'
  },
  {
    id: 8,
    cim: 'Orbán Viktor: nő ügyekkel nem foglalkozik!',
    datum: new Date('2020-05-04T10:00:00'),
    htmlContent: `<p>A kormány egy elfogadhatatlan politikai nyilatkozatot terjesztett elő, amely elutasítja az isztambuli egyezményt.<br />
                  Jól mutatja az Orbán kormány hozzáállását, hiszen a miniszterelnök is megmondta: nő ügyekkel, nem foglakozik!</p>
                  <p>Hohn Krisztina (Új Kezdet) országgyűlési képviselő felszólalása.</p>`,
    kategoria: NewsCategoryKeys.PARLAMENTI_FELSZOLALAS,
    kepMainUrl: 'assets/images/news/general/general_2.jpg',
    kepSecUrl: 'assets/images/news/general/general_sec_1.jpg',
    szerzo: 'Hohn Krisztina',
    videoUrl: 'https://www.youtube.com/embed/FsZ8Cx_aUSw',
    rovidLeiras: 'Orbán Viktor: nő ügyekkel nem foglalkozik! Az isztambuli egyezmény elutasítása.'
  },
  {
    id: 9,
    cim: 'Maguknak ilyenkor ez jár az eszükben?',
    datum: new Date('2020-05-05T10:00:00'),
    htmlContent: `<p>"Hogy-hogy, maguknak ilyenkor, amikor járvány van, ez jár az eszükben?"<br />
                  Kérdezte a parlamentben Hohn Krisztina (LMP-UK) baranyai országgyűlési képviselő.</p>
                  <p>Kattintson az alábbi linkre az interjú olvasásához:</p>
                  <p><a href="https://szabadpecs.hu/2020/05/hogyhogy-maguknak-ilyenkor-amikor-jarvany-van-ez-jar-az-eszukben/?fbclid=IwAR1rtRk0nyfymSmAZcu7QaXIVBAYukQyul8nN-_NbToJNqqVCaI6oFKcdGM">https://szabadpecs.hu/2020/05/hogyhogy-maguknak-ilyenkor-amikor-jarvany-van-ez-jar-az-eszukben/?fbclid=IwAR1rtRk0nyfymSmAZcu7QaXIVBAYukQyul8nN-_NbToJNqqVCaI6oFKcdGM</a></p>`,
    kategoria: NewsCategoryKeys.EGYEB_HIR,
    kepMainUrl: 'assets/images/news/general/general_1.jpg',
    kepSecUrl: 'assets/images/news/general/general_sec_1.jpg',
    szerzo: 'Hohn Krisztina',
    videoUrl: null,
    rovidLeiras: 'Hogy-hogy, maguknak ilyenkor, amikor járvány van, ez jár az eszükben?, 2020. május 05.'
  },
  {
    id: 10,
    cim: 'Mi lesz a nehéz helyzetben élőkkel?',
    datum: new Date('2020-05-08T10:00:00'),
    htmlContent: `<p>"Jelen pillanatban szükség lenne valamilyen központi keretre, melyre az érintett önkormányzatok -szociális és védekezési feladataik költségére- igényt nyújthatnának be. Hosszú távon pedig elengedhetetlen lesz a leszakadó térségek hatékony felzárkóztatására. Fel kell térképezni a hiányosságokat és a lehetőségeket egyaránt és meg kell alkotni egy olyan programot, mely alkalmas a problémák kezelésére és természetesen ehhez a megfelelő forrásokat is hozzá kell rendelni."</p>
                  <p class="align-right">Hohn Krisztina</p>
                  <p>Kattintson az alábbi linkre az interjú olvasásához:</p>
                  <p><a href="https://ugytudjuk.hu/cikk/hohn-krisztina-a-nehez-helyzetben-elok-ebben-az-idoszakban-meg-rosszabb-helyzetbe-kerulhetnek?fbclid=IwAR1pPV50OfbVLQU-p-HQkWPH-XzPYNrYgfJRC1vCkskk1J6ds0VjLntR4zI">https://ugytudjuk.hu/cikk/hohn-krisztina-a-nehez-helyzetben-elok-ebben-az-idoszakban-meg-rosszabb-helyzetbe-kerulhetnek?fbclid=IwAR1pPV50OfbVLQU-p-HQkWPH-XzPYNrYgfJRC1vCkskk1J6ds0VjLntR4zI</a></p>`,
    kategoria: NewsCategoryKeys.EGYEB_HIR,
    kepMainUrl: 'assets/images/news/20200508/202005081000.jpg',
    kepSecUrl: 'assets/images/news/20200508/202005081000_sec.jpg',
    szerzo: 'Hohn Krisztina',
    videoUrl: null,
    rovidLeiras: 'Mi lesz a nehéz helyzetben élőkkel? Interjú Hohn Krisztinával, 2020. május 08.'
  },
  {
    id: 11,
    cim: 'A szociális dolgozók is megkapják a megérdemelt 500 ezer forintot?',
    datum: new Date('2020-05-11T10:00:00'),
    htmlContent: `<p>A szociális dolgozók is megkapják a megérdemelt 500 ezer forintot?</p>
                  <p>Hohn Krisztina azonnali kérdése 2020.05.11.</p>`,
    kategoria: NewsCategoryKeys.PARLAMENTI_FELSZOLALAS,
    kepMainUrl: 'assets/images/news/general/general_2.jpg',
    kepSecUrl: 'assets/images/news/general/general_sec_1.jpg',
    szerzo: 'Hohn Krisztina',
    videoUrl: 'https://www.youtube.com/embed/osFPJKElNYE',
    rovidLeiras: 'A szociális dolgozók is megkapják a megérdemelt 500 ezer forintot? Hohn Krisztina azonnali kérdése 2020.05.11.'
  },
  {
    id: 12,
    cim: 'Online sajtótájékoztató az örökbefogadásról',
    datum: new Date('2020-05-19T10:00:00'),
    htmlContent: `<p>Az LMP frakció módosító javaslatot nyújt be a kötlelező felkészítő tanfolyam megtartásáért és költségének állami átvállalásáért.</p>`,
    kategoria: NewsCategoryKeys.SAJTOTAJEKOZTATO,
    kepMainUrl: 'assets/images/news/general/general_2.jpg',
    kepSecUrl: 'assets/images/news/general/general_sec_1.jpg',
    szerzo: 'Hohn Krisztina',
    videoUrl: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fhohnkrisztina%2Fvideos%2F1152971745056504%2F&show_text=0',
    rovidLeiras: 'Az LMP frakció módosító javaslatot nyújt be a kötlelező felkészítő tanfolyam megtartásáért és költségének állami átvállalásáért.'
  },
  {
    id: 13,
    cim: 'Áprilisban 330 ezerre nőtt a munkanélküliek száma',
    datum: new Date('2020-05-20T10:00:00'),
    htmlContent: `<p>Az ATV Start vendégei Hohn Krisztina országgyűlési képviselő, LMP és Burány Sándor frakcióvezető-helyettes, Párbeszéd.</p>
                  <p>Az interjú megtekintéséhez kattintson az alábbi linkre:</p>
                  <p><a href="http://www.atv.hu/videok/video-20200520-330-ezerre-nott-a-munkanelkuliek-szama">http://www.atv.hu/videok/video-20200520-330-ezerre-nott-a-munkanelkuliek-szama</a></p>`,
    kategoria: NewsCategoryKeys.MEDIA,
    kepMainUrl: 'assets/images/news/20200520/202005201000.jpg',
    kepSecUrl: 'assets/images/news/20200520/202005201000_sec.jpg',
    szerzo: 'Hohn Krisztina',
    videoUrl: null,
    rovidLeiras: 'Az ATV Start vendégei Hohn Krisztina országgyűlési képviselő, LMP és Burány Sándor frakcióvezető-helyettes, Párbeszéd.'
  },
  {
    id: 14,
    cim: 'Kell felkészítő tanfolyam az örökbefogadás előtt',
    datum: new Date('2020-05-20T14:00:00'),
    htmlContent: `<p>Hohn Krisztina vezérszónoki felszólalása az örökbefogadásról szóló törvény vitájában.</p>`,
    kategoria: NewsCategoryKeys.PARLAMENTI_FELSZOLALAS,
    kepMainUrl: 'assets/images/news/general/general_1.jpg',
    kepSecUrl: 'assets/images/news/general/general_sec_1.jpg',
    szerzo: 'Hohn Krisztina',
    videoUrl: 'https://www.youtube.com/embed/XoHi9AbfCI8',
    rovidLeiras: 'Hohn Krisztina vezérszónoki felszólalása az örökbefogadásról szóló törvény vitájában.'
  },
  {
    id: 15,
    cim: 'Az örökbefogadási tanfolyam fontosságáról',
    datum: new Date('2020-05-21T10:00:00'),
    htmlContent: `<p>Hohn Krisztina (Új Kezdet elnök) kétperces felszólalása az örökbefogadásról szóló törvény vitájában.</p>`,
    kategoria: NewsCategoryKeys.PARLAMENTI_FELSZOLALAS,
    kepMainUrl: 'assets/images/news/general/general_2.jpg',
    kepSecUrl: 'assets/images/news/general/general_sec_1.jpg',
    szerzo: 'Hohn Krisztina',
    videoUrl: 'https://www.youtube.com/embed/syUP1-ZFM5g',
    rovidLeiras: 'Hohn Krisztina (Új Kezdet elnök) kétperces felszólalása az örökbefogadásról szóló törvény vitájában.'
  },
  {
    id: 16,
    cim: 'A kormány és a diplomások ára',
    datum: new Date('2020-05-21T14:00:00'),
    htmlContent: `<p>Hohn Krisztina publicisztikája. Kattintson az alábbi linkre a megtekintéshez: </p>
                  <p><a href="https://nepszava.hu/3078845_a-kormany-es-a-diplomasok-ara">https://nepszava.hu/3078845_a-kormany-es-a-diplomasok-ara</a></p>`,
    kategoria: NewsCategoryKeys.EGYEB_HIR,
    kepMainUrl: 'assets/images/news/20200521/20200521.jpg',
    kepSecUrl: 'assets/images/news/20200521/20200521_sec.jpg',
    szerzo: 'Hohn Krisztina',
    videoUrl: null,
    rovidLeiras: 'Hohn Krisztina publicisztikája.'
  },
  {
    id: 17,
    cim: 'Romlik a szakképzésben dolgozók helyzete',
    datum: new Date('2020-06-03T10:00:00'),
    htmlContent: `<p>Hohn Krisztina napirend előtti felszólalása  2020. június 3.</p>`,
    kategoria: NewsCategoryKeys.PARLAMENTI_FELSZOLALAS,
    kepMainUrl: 'assets/images/news/general/general_2.jpg',
    kepSecUrl: 'assets/images/news/general/general_sec_1.jpg',
    szerzo: 'Hohn Krisztina',
    videoUrl: 'https://www.youtube.com/embed/r3dqMQLj51Y',
    rovidLeiras: 'Hohn Krisztina napirend előtti felszólalása  2020. június 3.'
  },
  {
    id: 18,
    cim: 'A trianoni békediktátum 100. évfordulója',
    datum: new Date('2020-06-03T14:00:00'),
    htmlContent: `<p style="text-align: justify">A trianoni b&eacute;kedikt&aacute;tum 100. &eacute;vfordul&oacute;j&aacute;n osztjuk Kar&aacute;csony Gergely,Budapest főpolg&aacute;rmester&eacute;nek al&aacute;bbi v&eacute;lem&eacute;ny&eacute;t. Csatlakozva a főv&aacute;rosi&ouml;nkorm&aacute;nyzati kezdem&eacute;nyez&eacute;shez, mi is k&eacute;rj&uuml;k minden honfit&aacute;rsunkat, j&aacute;ruljanak hozz&aacute; maguk is, hogy egy percre &aacute;lljon le haz&aacute;nk minden telep&uuml;l&eacute;se atrianoni d&ouml;nt&eacute;s sz&aacute;zadik &eacute;vfordul&oacute;j&aacute;n, j&uacute;nius 4-&eacute;n, 16 &oacute;ra 30 perckor.</p><p style="text-align: justify">... Abban azonban nem lehet k&ouml;z&ouml;tt&uuml;nk vita, hogy sz&aacute;z &eacute;vvel ezelőtt ord&iacute;t&oacute;anigazs&aacute;gtalan, a nemzetek &ouml;nrendelkez&eacute;s&eacute;t s&aacute;rba tipr&oacute; d&ouml;nt&eacute;s sz&uuml;letett. Mimagyarok, sz&aacute;z &eacute;vvel a d&ouml;nt&eacute;s ut&aacute;n sem &eacute;rezhet&uuml;nk ezzel kapcsolatban m&aacute;st,mint m&eacute;lys&eacute;ges f&aacute;jdalmat. F&aacute;jdalmat az&eacute;rt, mert kilakoltattak benn&uuml;nketorsz&aacute;gunkb&oacute;l, hiszen Magyarorsz&aacute;g elvesztette ter&uuml;let&eacute;nek &eacute;s nemzetij&ouml;vedelm&eacute;nek k&eacute;tharmad&aacute;t. &Eacute;s f&aacute;jdalmat az&eacute;rt is, mert a nemzeti &ouml;nrendelkez&eacute;sjelszav&aacute;t s&aacute;rba tiporva, 3,5 milli&oacute;nyi polg&aacute;rt&aacute;rsunk ker&uuml;lt puszt&aacute;n hatalmisz&aacute;m&iacute;t&aacute;sb&oacute;l, akarata ellen&eacute;re idegen &aacute;llam fennhat&oacute;s&aacute;ga al&aacute;. Mintegy 400 ezrenk&eacute;nytelenek voltak elhagyni sz&uuml;lőf&ouml;ldj&uuml;ket, sokuk vas&uacute;ti vagonokban h&uacute;zta megmag&aacute;t hetekig-h&oacute;napokig, n&eacute;ha &eacute;vekig. Hogy f&aacute;jdalmunkb&oacute;l ne gyűl&ouml;let, am&uacute;lttal val&oacute; szemben&eacute;z&eacute;sből ne a j&ouml;vő felad&aacute;sa legyen, ahhoz az kell, hogy egypercre legal&aacute;bb legyen k&ouml;z&ouml;s az eml&eacute;kez&eacute;s&uuml;nk. ...j&uacute;nius 4-&eacute;n, 16 &oacute;ra 30 perckor.Egy percre meg fog &aacute;llni a budapesti k&ouml;z&ouml;ss&eacute;gi k&ouml;zleked&eacute;s, le&aacute;llnak a metr&oacute;k, abuszok, a villamosok, &eacute;s arra k&eacute;rek mindenkit, hogy egy r&ouml;vidke percre &aacute;lljunkmeg mi is, mindannyian, a budapesti polg&aacute;rok k&ouml;z&ouml;ss&eacute;ge. &Aacute;lljon meg egy percrea k&ouml;z&uacute;ti aut&oacute;s, biciklis &eacute;s gyalogos k&ouml;zleked&eacute;s! A csendben halljuk meg egym&aacute;sk&ouml;zels&eacute;g&eacute;t hat&aacute;ron innen &eacute;s t&uacute;l, a m&uacute;lt a j&ouml;vő gener&aacute;ci&oacute;it, tegy&uuml;k ezt afőv&aacute;rosban, &eacute;s vid&eacute;ken is! Azt&aacute;n az egy percnyi csend ut&aacute;n &uacute;gy induljon tov&aacute;bbaz &eacute;let, hogy egy kicsit k&ouml;zelebb vagyunk egym&aacute;shoz!&rdquo;</p>
                    <p style="text-align: right"><strong>Új Kezdet elnöksége</strong></p>`,
    kategoria: NewsCategoryKeys.EGYEB_HIR,
    kepMainUrl: 'assets/images/news/20200603/20200603.jpg',
    kepSecUrl: 'assets/images/news/20200603/20200603_sec.jpg',
    szerzo: 'Új Kezdet',
    videoUrl: null,
    rovidLeiras: 'A trianoni békediktátum 100. évfordulója. 2020. június 4.'
  },
  {
    id: 19,
    cim: 'Bot és bilincs az iskolaőröknél?',
    datum: new Date('2020-06-10T10:00:00'),
    htmlContent: `<p style="text-align: justify">Hohn Krisztina parlamenti felszólalása az iskolaőrökkel kapcsolatban.</p>`,
    kategoria: NewsCategoryKeys.PARLAMENTI_FELSZOLALAS,
    kepMainUrl: 'assets/images/news/general/general_1.jpg',
    kepSecUrl: 'assets/images/news/general/general_sec_1.jpg',
    szerzo: 'Hohn Krisztina',
    videoUrl: 'https://www.youtube.com/embed/5pnh0kOSt7M',
    rovidLeiras: 'Hohn Krisztina parlamenti felszólalása az iskolaőrökkel kapcsolatban.'
  }

];

