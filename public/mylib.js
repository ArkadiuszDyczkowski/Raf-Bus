/*Format wstawiania danych do postów(aktualności)
Każda linia to jeden post pomiędzy {}
title=Tytuł
fileName = Nazwa pliku wraz z roszerzeniem(plik musi znajdować się w ścieżce na serwerze 0:/domains/rafbusnowicki.pl/public_html/Img/ )
description = opis wyświetlany pod zdjęciem
*/
const posts = [
    { title: "Polska", fileName: "photoOne.jpg", desciption: "aaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc" },
    { title: "Polska", fileName: "photoOne.jpg", desciption: "aaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc" }];


/*Format wstawiania danych do rozkłądu
    Każda linia jest odpowiednikiem linii w tabeli(pomiędzy nawiasami kwadratowymi [])
    Kolejność wstawiania danych od lewej do prawej od góry do dołu
*/
schedule = [
    ["", "Biała Podlaska", "Terespol", "Brześć"],
    ["Kurs PL 1-7 (tax free)", "7:20", "8:15", "10:50"],
    ["Kurs BY 1-6 (expres)", "14:30", "15:25", "18:10"]
];

window.posts = posts
window.schedule = schedule;