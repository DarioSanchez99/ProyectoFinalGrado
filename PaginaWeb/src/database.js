const mongoose = require('mongoose');
const { mongodb } = require('./keys');

mongoose.connect(mongodb.URI).then(()=>{console.log('...')})
  .then(db => console.log('DB is connected'))
  .catch(err => console.log(err));