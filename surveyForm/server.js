// ----------SETUP----------
var express = require('express');

var app = express();

// body-parser Module
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));

// ejs Module
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')


// ----------ROUTES----------

// root route
app.get('/', function(req, res){
    res.render('index')
})

app.post('/result', function(req, res){
    console.log("We have POST DATA!! \n\n", req.body)
    res.render('results', req.body)
})





// ----------Listener----------
// Tell the express app to listen on port 8000
// this line will almost always be at the end of your server.js file (we only tell the server to listen after we have set up all of our rules)
app.listen(8000, function(){
    console.log("listening on Port 8000")
});
