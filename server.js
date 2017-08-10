const express = require('express')
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const session = require('express-session');
app.use(bodyParser.urlencoded({extended:false}))
const methodOverride = require('method-override')
app.use(methodOverride('_method'));

app.use( express.static ( 'public' ) );

//use sessions
app.use(session({
    secret: "thisisasite", //some random string
    resave: false,
    saveUninitialized: false
}));



//connect users.js
const usersController = require('./controllers/users.js')
app.use('/users', usersController);

//connect sessions.js
const sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);

//connect photos.js
const photosController = require('./controllers/photos.js')
app.use('/photos', photosController);



//connect homepage route
//add session info
app.get('/', function(req, res){
    res.render('index.ejs', {
        currentUser: req.session.currentuser
    });
});

// app.get('/', (req, res)=>{
//   res.render('index.ejs');
//   });

//special page for sessions
app.get('/app', function(req, res){
    if(req.session.currentuser){
        res.send('the party');
    } else {
        res.redirect('/sessions/new');
    }
});

  //setup new mongo db
  // mongoose.connect('mongodb://localhost:27017/cityview');

  const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/cityview';
  mongoose.connect(mongoUri);

  mongoose.connection.once('open', ()=> {
    console.log('connect to mongo')
  })


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('listening..')
})
