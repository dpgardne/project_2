const express = require('express')
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))

//connect users.js
const usersController = require('./controllers/users.js')
app.use('/users', usersController);

//connect homepage route
app.get('/', (req, res)=>{
  res.render('index.ejs');
  });

app.listen(3000, () => {
  console.log('listening..')
})
