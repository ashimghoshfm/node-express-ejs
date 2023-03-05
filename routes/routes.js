const express = require('express');
const router = express.Router(); 


//for homepage load:
router.get('/', (req, res)=>{
    res.render('index', {
        title: "My App"
    });
});


// for add blog page:
router.get('/blog', (req, res)=>{
    res.render('blog', {
        title: "Blog Page"
    });
});




//for about page:
router.get('/about', (req, res)=>{
    res.render('about', {
        title: "About"
    });
});



// for contact page:
router.get('/contact', (req, res)=>{
    res.render('contact', {
        title: "Contact"
    });
});




module.exports = router;