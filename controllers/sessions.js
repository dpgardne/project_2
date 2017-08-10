const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
//require bcrypt
const bcrypt = require('bcrypt');


router.get('/new', function(req, res){
    res.render('sessions/new.ejs');
});

//create session create route
router.post('/', function(req, res){
    User.findOne({ user: req.body.user }, function(err, foundUser){
        console.log(req.body.user)
        if( bcrypt.compareSync(req.body.password, foundUser.password) ){
            req.session.currentuser = foundUser;
            res.redirect('/');
        } else {
            res.send('wrong password');
            console.log(req.body.password)
        }
    });
});


//bcryt delete route
router.delete('/', function(req, res){
    req.session.destroy(function(){
        res.redirect('/');
    });
})

module.exports = router;
