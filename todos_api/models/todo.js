const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const model_todo = new Schema({

    name:{ type: String, required: 'cannot be blank', max: [128,'toolong,max is 128 characters']},
    completed: {type:Boolean, default:false},
    createdAt: {type: Date ,default: Date.now},


}); 

module.exports = mongoose.model('todo',model_todo)