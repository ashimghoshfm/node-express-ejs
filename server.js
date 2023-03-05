//express:
const express = require('express');

const app = express();

// To use bootstrap or static files:
app.use(express.static('public'));

// set template engine
app.set('view engine', 'ejs');


// router prefix:
app.use('/', require('./routes/routes'));


app.listen(3000, ()=>{
    console.log(`server is running at http://localhost:3000`);
});