
/* Ödev 3
Daire Modüler Dosyası
Daire alan : circleArea ve daire çevre : circleCircumference fonksiyonları içeren ve consola sonuçları yazdıran circle.js dosyası oluşturunuz.
module.exports yöntemi ile fonksiyonları oluştururken export ediniz.
require ve object destructing kullanarak index.js dosyasında yarıçap (r) 5 olacak şekilde ekran çıktısını alınız.*/


function circleArea(r){
    let area = Math.PI*(r*r);
    console.log('Area of circle is: ' + area + ' cm2');
};

function circleCircumference(r){
    let circumference = 2 * Math.PI * r;
    console.log('Circumference of circle is: ' + circumference + ' cm');
};

module.exports = {circleArea, circleCircumference};