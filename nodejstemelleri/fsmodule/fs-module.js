// file system,fs dosya islemleri yapmak icin kullanilan core moduldur.
// nodejs icerisinde hazir gelen moduller core modul olarak adlandirilir.
// console da bir core moduldur ancak calisma ortamina aktarmamiza gerek yoktur.
// bunun nedeni console gibi moduller global olarak tanimlanmistir.
// bu sayede ice aktarilmadan direkt olarak kullanilibilir.
// global.console calisir ancak global.fs calismaz

const fs = require('fs');


//fs.read(fd[, options], callback)
//dosya okumak-read file
fs.readFile('password.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});


//fs.writeFile(file, data[, options], callback)
//dosya yazmak-write file
fs.writeFile('example.txt', 'hello node.js', (err,data) => {   //dosya yoksa olusturur
    if (err) throw err;
    console.log('dosya yazildi');
});

//cd nodejstemelleri\fsmodule dosya içerisine girerek terminalde node fs-module.js yazarak çalıştırabiliriz.

//json dosyası oluşturmak
fs.writeFile('example.json', '{"name": "Aleyna", "age":23}', (err,data) => {   //dosya yoksa olusturur
    if (err) throw err;
    console.log('json dosya yazildi');
});

//veri eklemek-append file
fs.appendFile('example.txt', '\n hello node.js, append file', (err,data) => {  
    if (err) throw err;
    console.log('yeni veri eklendi.');
});


//dosya silmek-unlink file
fs.unlink('example2.json', (err,data) => { 
    if (err) throw err;
    console.log('dosya silindi.');
});

//dosya adını değiştirmek-rename file
fs.rename('example.txt', 'example2.txt', (err,data) => {   
    if (err) throw err;
    console.log('dosya adi degistirildi.');
});

//klasör oluşturmak-mkdir
fs.mkdir('uploads/img',{recursive : true}, (err,data) => {   //iç içe klasör oluşturmak için recursive : true
    if (err) throw err;
    console.log('klasorler olusturuldu.');
});

//klasör silmek-rmdir
fs.rmdir('uploads/img',{recursive : true}, (err,data) => {  
    if (err) throw err;
    console.log('klasorler silindi.');
});





