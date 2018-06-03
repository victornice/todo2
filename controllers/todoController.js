const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const taskModel = require('../models/todoModel');

// Connect Database
mongoose.connect('mongodb://wael:W123456@ds147390.mlab.com:47390/todo-testssafdh');

module.exports = (app) => {
    app.get('/', (req, res) => {
        taskModel.find({}, (err, data) => {
            res.render('todo', {tasks: data});
            if (err) console.log(err);
        });
    });
    app.post('/', urlencodedParser, (req, res) => {
        let newTask = taskModel(req.body).save((err, data) => {
            res.json(data);
            if (err) console.log(err);
        });
    });

    app.delete('/item/:id', (req, res) => {
        taskModel.findByIdAndRemove({item: req.params.id}, (err, data) => {
            res.json(data);
            if (err) console.log(err);
        });
    });
}