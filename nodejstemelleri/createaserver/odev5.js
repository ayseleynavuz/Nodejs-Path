/*
Ödev 5
Kendi Web Sunucumuzu yazalım.
Kendi bilgisayarımızda aşağıdaki özellikleri kullanarak sunucumuzu yazalım.

createServer metodunu kullanacağız.
index, hakkimda ve iletisim sayfaları oluşturalım.
Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h2 başlıkları yazdıralım.
port numarası olarak 5000'i kullanalım.
*/

const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(url);


    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>INDEX SAYFASI</h1>');
    }
    else if (url === '/hakkimda') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>HAKKIMDA SAYFASI</h1>');
    }
    else if (url === '/iletisim') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>ILETISIM SAYFASI</h1>');
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>404 SAYFAS BULUNAMADI</h1>');
    }
    res.end();

});

const port = 5000

server.listen(port, () => {
    console.log(`sunucu port ${port}'de baslatildi`)
});