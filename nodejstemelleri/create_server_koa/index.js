/*
Ödev 6
Koa.js ile web sunucumuzu yazalım.
koa paketini indirelim.
index, hakkimda ve iletisim sayfaları oluşturalım.
Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h1 başlıkları yazdıralım.
port numarası olarak 3000'i kullanalım.
*/

const Koa = require('koa');

const app = new Koa();

// response
app.use(ctx => {
    if (ctx.path == '/') {
        ctx.body = '<h1>index sayfasina hosgeldiniz</h1>';
    }
    else if (ctx.path == '/hakkimda') {
        ctx.body = '<h1>hakkimda sayfasina hosgeldiniz</h1>';
    }
    else if (ctx.path == '/iletisim') {
        ctx.body = '<h1>iletisim sayfasina hosgeldiniz</h1>';
    }
    console.log(ctx.path)
});

const port = 3000

app.listen(port, () => {
    console.log('server baslatildi')
});