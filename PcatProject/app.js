const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');
const ejs = require('ejs');
const path = require('path');
const fs = require('fs'); //core module
const Photo = require('./models/Photo');
const photoController = require('./controllers/photoControllers');
const pageController = require('./controllers/pageController');

const app = express();


// connect to mongodb
mongoose.connect("mongodb://127.0.0.1:27017/pcat-test-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> {
    console.log('DB CONNECTED!')
  }).catch((err)=> {
    console.log(err)
});

// template engine
app.set('view engine', 'ejs'); // set the view engine to ejs

//middleware
app.use(express.static('public')); // to access the files in public folder
app.use(express.urlencoded({ extended: true })); // to parse the data from the form
app.use(express.json()); // to parse the data from the form
app.use(fileUpload()); // to upload files
app.use(methodOverride('_method', { methods: ['POST', 'GET'] })); // to use PUT and DELETE methods


// ROUTES
app.get('/', photoController.getAllPhotos);
app.get('/photos/:id', photoController.getPhoto);
app.post('/photos', photoController.createPhoto);
app.put('/photos/:id', photoController.updatePhoto);
app.delete('/photos/:id', photoController.deletePhoto);

app.get('/about', pageController.getAboutPage);
app.get('/add', pageController.getAddPage);
app.get('/photos/edit/:id', pageController.getEditPage);



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