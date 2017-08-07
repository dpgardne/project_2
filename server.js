const express = require('express')
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
const methodOverride = require('method-override')
app.use(methodOverride('_method'));

app.use( express.static ( 'public' ) );

//connect users.js
const usersController = require('./controllers/users.js')
app.use('/users', usersController);

//connect photos.js
const photosController = require('./controllers/photos.js')
app.use('/photos', photosController);

//connect homepage route
app.get('/', (req, res)=>{
  res.render('index.ejs');
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
