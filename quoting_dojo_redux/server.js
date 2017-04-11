// --SETUP--

// Load modules
var express = require('express');
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
// Use native promises
mongoose.Promise = global.Promise;

// Use imported modules
var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

// Database
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of our db in mongodb --
// this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/basic_mongoose');

var QuoteSchema = new mongoose.Schema({
    name: String,
    quote: String
})

// Constructor to create Quote documents
var Quote = mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'Quote'


// EJS Module
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


// --ROUTES--

// root route to render the index.ejs view
app.get('/', function(req, res) {

    res.render("index");
})

app.post('/quotes', function(req, res) {
    console.log("We have POST DATA!!")

    // Code to add to database goes here
    // Using .create() will create a new document and save all at once instead of using .save()
    // .create() takes in the object to make into document and a callback with two parameters, error and newDocument(if successfull)
    Quote.create(req.body, function (err, newDocument) {
        if (err) { return handleError(err)}
        res.redirect('/results')
    })
})

app.get('/results', function(req,res){
    Quote.find({}, function(err, myData) {
    // This is the method that finds all of the quotes from the database
    if (err) {
        console.log("Error trying to find Quotes")
    } else {
        res.render("results",{allQuotes:myData})
    }
    });
})


// --LISTENER--
// setting server to run on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000!");
})
