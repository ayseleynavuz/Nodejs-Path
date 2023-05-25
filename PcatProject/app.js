const express = require('express');
const path = require('path');
const app = express();

//middleware
const myLogger = (req, res, next) => {
    console.log('inside a middleware');
    next(); // to move to the next middleware
};



app.use(express.static('public')); // to access the files in public folder
app.use(myLogger); // to use the middleware

//app.use(express.static("temp"))
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'temp/index.html'));
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


