const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();

// template engine
app.set('view engine', 'ejs'); // set the view engine to ejs

//middleware
app.use(express.static('public')); // to access the files in public folder

//routes
app.get('/', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'temp/index.html'));
    res.render('index');
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/add', (req, res) => {
    res.render('add');
});



/*
app.get('/', (req, res) => {  
    res.send('Hello World');
    const photo = {
        id: 1,
        title: 'photo Name',
        description: 'photo description',
    };
  });
*/

const port = 3000;
app.listen(port, () => {    
    console.log(`Server is running on port ${port}`);
});


