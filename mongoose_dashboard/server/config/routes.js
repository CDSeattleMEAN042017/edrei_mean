// Import all controllers here; controllers have all the logic
var animalsController = require("../controllers/animals.js")


//ROUTES
module.exports = function(app){
    // Should delete the mongoose from the database by ID.
    app.get("/animals/destroy/:id", animalsController.remove)
    // Displays all of the animals.
	app.get("/", animalsController.index)
    // Displays information about one animal.
    app.get("/animals/:id", animalsController.show)
    // Should show a form to edit an existing animal.
    app.get("/animals/edit/:id", animalsController.edit)
    // Displays a form for making a new animal. //ASK ABOUT /animals/new
    app.get("/new", animalsController.new)
    // Should be the action attribute for the form in the above route (GET '/mongooses/edit/:id').
    app.post("/animals/:id", animalsController.update)
    // Should be the action attribute for the form in the above route (GET '/animals/new').
    app.post("/animals", animalsController.save)

}
