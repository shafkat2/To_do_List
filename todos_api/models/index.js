const mongoose = require('mongoose');

const todo = require('./todo')

mongoose.set('debug',true)
mongoose.connect('mongodb://localhost//todo-api');



mongoose.Promise = Promise;
