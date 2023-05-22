// async ile fonksiyonun javascriptin varsayilan olarak gelen senkron yapisi 
// asenkrona donusturulur
// await ile istenilen metot beklenir ve onun arka planda calismasi beklenir

// parametre olarak data alan promise fonksiyon tanimlanid
function getData(data) {
    return new Promise((resolve, reject) => {
        // fonksiyon calistigi ilk an veriler alinmaya baslandi
        console.log('veriler alinmaya calisiliyor...')

        // eger gelen veri dogru ise resolve yanlis ise rejectin calismasi saglandi
        if (data) {
            resolve('veriler alindi')
        }
        else {
            reject('veriler alinamadi')
        }
    })
}

// ayni sekilde calisan ve verileri temizleyen fonksiyon tanimlandi
function cleanData(receivedData) {
    return new Promise((resolve, reject) => {
        console.log('veriler duzenleniyor...')

        if (receivedData) {
            resolve('veriler duzenlendi')
        }
        else {
            reject('veriler duzenlenmedi')
        }
    })
}

// bu iki fonksiyon promise'in sagladigi then ve catch ile calistirildi

// getData(true)
//     .then((value) => {
//         console.log(value)
//         cleanData(true).then((value) => {
//             console.log(value)
//         }).catch((error) => {
//             console.log(error)
//         })
//     }).catch((error) => {
//         console.log(error)
//     })

// ancak bu sekilde ulasmak iç içe olduğundan kafa karistirir
// bu yuzden okunusu daha kolay olan async await yapisi tercih edilmektedir


// Async - Await yapısı
// async await ile yeniden cagirma
// async ile fonksiyona asenkron ozelligi kazandirildi

async function processData() {
    // hata tespiti icin try catch bloklari kullanilir
    try {
        // await ile bir is bitene kadar bekler
        const receivedData = await getData(true);
        console.log(receivedData);
        const cleanedData = await cleanData(false);
        console.log(cleanedData);
        // hata bulunursa yapilacaklar ayarlandi
    } catch (error) {
        console.log(error)
    }
}

// processData();

// promisede kullanılan kitap örneğinin async await ile tekrarlanması

const books = [
    { name: 'book 1', author: 'author 1' },
    { name: 'book 2', author: 'author 2' },
    { name: 'book 3', author: 'author 3' },
]

const listBooks = () => {
    books.map(book => {
        console.log(book.name);
    })
};

const addBook = (newBook) => {
    const promiseBook = new Promise((resolve, reject) => {
        reject('bir hata olustu');
        books.push(newBook);
        resolve(books);
    })

    return promiseBook
};

// async, await ve try-catch ile kitap eklenip durumlar kontrol edildi

async function showBooks(){
    try {
        await addBook({name: 'book4 ', author: 'author 4'})
        listBooks();
        
    } catch (error) {
        console.log(error);
    }
}

showBooks();







