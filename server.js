const express = require('express')
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
const methodOverride = require('method-override')
app.use(methodOverride('_method'));

//connect users.js
const usersController = require('./controllers/users.js')
app.use('/users', usersController);

//connect homepage route
app.get('/', (req, res)=>{
  res.render('index.ejs');
  });

  //setup new mongo db
  mongoose.connect('mongodb://localhost:27017/cityview');
  mongoose.connection.once('open', ()=> {
    console.log('connect to mongo')
  })

app.listen(3000, () => {
  console.log('listening..')
})
