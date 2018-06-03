const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todoSchema = new Schema({
    item: String
});

let task = mongoose.model('task', todoSchema);

module.exports = task;