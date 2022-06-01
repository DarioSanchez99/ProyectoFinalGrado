const mongoose = require('mongoose');
const { mongodb } = require('./keys');

mongoose.connect(mongodb.URI).then(()=>{console.log('...')})
  .then(db => console.log('Conectado a base de datos'))
  .catch(err => console.log(err));