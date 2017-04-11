var mongoose = require("mongoose")
var fs = require("fs")
var path = require("path")

mongoose.Promise = global.Promise
// change this for every different app
mongoose.connect("mongodb://localhost/mongoose_dashboard")

var models_path = path.join(__dirname, "./../models")

fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf(".js") >= 0){
		require(path.join(models_path, file))
	}
})
