/* FS File System Modülü
Node.js FS Modülü kullanarak CRUD işlemleri yapacağız.

employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
Bu veriyi okuyalım. (READ)
Bu veriyi güncelleyelim.
Dosyayı silelim. */

//cd nodejstemelleri\fsmodule dosya içerisine girerek terminalde node fs-module.js yazarak çalıştırabiliriz.

//CRUD
//create
fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}',(err,data) => { 
    if (err) throw err;
    console.log('json dosya yazildi');
});

//read
fs.readFile('employees.json', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// update
fs.appendFile('employees.json', '\ndosya guncellendi', 'utf8', (err) => {
    if (err) throw err
    console.log('dosya guncellendi')
});

// delete
fs.unlink('employees.json', (err) => {
    if (err) throw err
    console.log('dosya silindi')
});

