// Import all controllers here; controllers have all the logic
// Good idea to have a controller per model
// Example: var animalsController = require("../controllers/animal.js")
var personsController = require("../controllers/persons.js")


//ROUTES
module.exports = function(app){
    // will serve up the full collection of people born in 1955
	app.get("/", personsController.index)
    app.get("/new/:name/", personsController.createNew)
    app.get("/remove/:name/", personsController.remove)
    app.get("/:name", personsController.show)

}
