var express = require('express'),
    bodyParser = require('body-parser'),
    path = require("path"),
    app = express();


var PORT = 8000

app.use(bodyParser.urlencoded({ extended: true}))
app.use(express.static(path.join(__dirname, "./client/static")))
app.use(express.static(path.join(__dirname, "./node_modules")))

app.set("views", path.join(__dirname, "./client/views"))
app.set("view engine", "ejs")

// must require mongoose first so that it connects to db and requires all models
// so the models can be used in controllers
require("./server/config/mongoose.js")

require("./server/config/routes.js")(app)

app.listen(PORT, function(){
	console.log(`Listening on port ${PORT}`)
})
