const express = require('express');
const todoController = require('./controllers/todoController')
const app = express();

// Set View Engine (Pug)
app.set('view engine', 'pug');

// Body Parser Middlelware
//app.use(bodyParser.urlencoded({ extended: false }));

// Set Static Files
app.use(express.static('./public'));

// Fire Controller
todoController(app)

app.listen(process.env.PORT || 3000, () => {
    console.log("Express server listening on port %d in %s mode");
});