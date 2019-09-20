const common = {
  Direction: "Biała Podlaska - Brześć",
  OurBusses: "Nasze autokary"
}

export const Resources = {
  PostContent: "Własność vertical-align określa wyrównanie pionowe elementów inline lub komórek tabeli.Wartość początkowa: baseline.Stosowana do: elementy inline i komórki tabeli Dziedziczona: nie Media: visual Wartość wyliczona: Składnia Sekcja vertical-align: baseline | sub | super | text-top | text-bottom | middle | top | bottom | <percentage> | <length> | inherit Wartości (dla elementów inline) Sekcja Większość wartości wyrównuje element w pionie w stosunku do jego rodzica: baseline Wyrównuje linię bazową elementu z linią bazową jego rodzica. sub Wyrównuje linię bazową elementu z linią bazową indeksu dolnego jego rodzica.super",

  TextResources: {
    PhoneNumbers: {
      PhoneNumberOne: "500-247-620",
      PhoneNumberTwo: "502-428-538",
    },
    Header: {
      Tittle: "Transport Krajowy i Międzynarodowy",
    },
    MenuBar: {
      MainSite: "Strona główna",
      Direction: common.Direction,
      RentBus: "Wynajem autokarów",
      AboutUs: "O nas",
      ContactUs: " Kontakt",
    },
    MainSideContent: {
      Schedule: "Rozkład jazdy/Pасписание",
      Direction: common.Direction,
      OurBusses: common.OurBusses
    },
    ContentSchedule: {
      Schedule: "Rozkład jazdy na trasie Biała Podlaska - Brześć",
      BP: "Biała Podlaska",
      Terespol: "Terespol",
      B: "Brześć",
      KPL: "Kurs PL 1-7 (tax free)",
      KBY: "Kurs BY 1-6 (expres)",
      Legend: {
        First: "1-7 - Nie kursuję w święta",
        Second: "1-6 - Nie kursuję w niedzielę i święta",
        Third: "expres- tax free nie jest odprawiane"
      },
      Stations: "Sprawdż lokalizację przystanków"
    },
    ContentContact: {
      PhoneContact: "Kontakt telefoniczny:",
      EmailContact: "Kontakt mailowy:",
      EmailAddress: "rafbusnowicki@gmail.com",
      Rafal:"Rafał: ",
      Jacek:"Jacek: ",

      ContactBox:{
        Address:"Adres:",
        Nip:"Nip",
        Tittle:"Informację o firmie",
        FirstLine:"Transport Krajowy i Międzynarodowy",
        SecondLine:"21-500 Biała Podlaska",
        ThirdLine:"Ul. Łukaszyńska 20a",
        FourthLine:"NIP: 5372639333"
      },
      ContactForm: {
        Email: "Twój adres mailowy:",
        NumberPhone: "Twój numer telefonu:",
        Topic: "Temat:",
        Question: "Pytanie:",
        Send: "Wyślij zapytanie",
        MailTo: {
          PhoneNumber: "Numer telefonu: ",
          MailAddress: "Adres mailowy: "

        }
      }
    },
    OurBusses:{
      NumberOfPlaces:"Liczba miejsc: ",
      OurBusses: common.OurBusses,
      Eqipment:"Wyposażenie",
      FirstBus:{
        Name:"Bova FHD 12-370",
        NumberOfPlaces:"49+2",
        Eqipment:["- WC", "- rozkładane i rozsuwane fotele", "- odtwarzacz DVD", "- klimatyzacja", "- indywidualne nawiewy i oświetlenie", "- pasy bezpieczeństwa"],
        Image:"Img/photoOne.jpg"
      },
      SecondBus:{
        Name:"Bova FHD 12-370A",
        NumberOfPlaces:"53+2",
        Eqipment:["- WC", "- rozkładane i rozsuwane fotele", "- odtwarzacz DVD", "- klimatyzacja", "- indywidualne nawiewy i oświetlenie", "- pasy bezpieczeństwa"],
        Image:"Img/photoTwo.jpg"
      },
      ThirdBus:{
        Name:"Bova FHD 12-340",
        NumberOfPlaces:"53+2",
        Eqipment:["- WC", "- rozkładane i rozsuwane fotele", "- odtwarzacz DVD", "- klimatyzacja", "- indywidualne nawiewy i oświetlenie"],
        Image:""
      }
    },
    AboutUs:{
      FirstTap:"Firma RAF-BUS Nowicki jest na rynku przewozów pasażerskich od 2011, początkowo jako działalność jednoosobowa w 2017 przekształcona na obecną formę. ",
      SecondTap:"Oferujemy Państwu wynajem autobusów turystycznych na terenie Polski jak i za granicą oraz transport naszymi autobusami kursowymi na trasie",
      Trace:"Biała Podlaska – Terespol – Brześć.",
      Task:"Realizujemy takie zlecenia jak:",
      TaskList:["- wycieczki na Białoruś","- wycieczki turystyczne po kraju","- wyjazdy integracyjne","- obsługa wesel i pogrzebów","- przewozy pracowników"],
      ThirdTap:"Jeżeli nie wymieniliśmy opcji, która Cie interesuje, zapraszamy do uzgodnienia wyjazdu poprzez kontakt z nami, na pewno się dogadamy.",
      InformationFirst:"Jesteśmy firmą rodzinną działającą od 2011 roku, początkowo jako mała firma jednoosobowa, a w 2017 roku w skutek rozwoju powstała spółka Raf-Bus Nowicki.",
      InformationSecond:"Oferujemy Państwu wynajem autobusów turystycznych na terenie Polski jak i za granicą oraz przejazdy kursowe na trasie Biała Podlaska – Terespol – Brześć.",
      InformationThird:"Realizujemy między innymi takie zlecenia jak:",
      InformationFourth:"* wycieczki na Białoruś",
      InformationFifth:"* wycieczki turystyczne po kraju",
      InformationSixth:"* wycieczki szkolne",
      InformationSeventh:"* wyjazdy integracyjne",
      InformationEighth:"* obsługa wesel i pogrzebów",
      InformationNinenth:"* przewozy pracowników",
      InformationTenth:"Jeżeli powyżej nie ma opcji, która Cie interesuje, zapraszamy do kontaktu z nami, na pewno się dogadamy."
    },
    Footer:{
      Text:"Spółka jawna Raf-Bus Nowicki"
    },  
    Href: {
      MainSite: "/#",
      Direction: "/#rozklad.html",
      RentBus: "/#wynajem.html",
      AboutUs: "/#oNas.html",
      ContactUs: "/#konatkt.html"
    },
    Map: {
      BP: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2454.333410328176!2d23.123224315954616!3d52.037240279645225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4721913128b3010d%3A0x549e23b777448209!2s%C5%BBeromskiego+1A%2C+21-500+Bia%C5%82a+Podlaska!5e0!3m2!1spl!2spl!4v1566408611886!5m2!1spl!2spl",
      Terespol: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2452.3062453454068!2d23.60177701595558!3d52.07415477692618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47210af98649cbbd%3A0x83602972939b3af4!2sCzerwonego+Krzy%C5%BCa+1B%2C+21-550+Terespol!5e0!3m2!1spl!2spl!4v1566408696122!5m2!1spl!2spl",
      Brzesc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2450.943184696852!2d23.679323415956226!3d52.098965575098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47210be7ad94bc01%3A0xe292137801f9fd7b!2zdnVsaWNhIEFyZMW-YW5pa2lkemUgMTIsIEJyZXN0LCBCaWHFgm9ydcWb!5e0!3m2!1spl!2spl!4v1566408741844!5m2!1spl!2spl"
    }
  }
}