const express = require('express')
const app = express();

//connect homepage route
app.get('/', (req, res)=>{
  res.render('index.ejs');
  });

app.listen(3000, () => {
  console.log('listening..')
})
