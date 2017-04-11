var mongoose = require("mongoose")
var Animal = mongoose.model("Animal")

module.exports = {
	index: function(req, res){
        //Find all animals,
        //Send all animals to index and display
        Animal.find({}, function(err, myData) {
        // This is the method that finds all of the quotes from the database
        if (err) {
            console.log("Error trying to find Animals")
        } else {
            res.render("index",{allAnimals:myData})
        }
        });
	},
    show: function(req, res){
        Animal.find({ _id: req.params.id }, function(err, myData) {
            //console.log(myData)
            if (err) { console.log("We had an error"); }
            res.render('show', {animal : myData[0] });
        });
    },
    new: function(req, res){
        //display form for making new animal
        res.render("new")
    },
    save: function(req, res){
        //Should be the action attribute for the form
        //in the above route (GET '/animals/new').
        Animal.create(req.body, function (err, newDocument) {
            if (err) { console.log(err)}
                res.redirect('/')
            })
    },
    edit: function(req, res){
        // Should show a form to edit an existing animal.
        Animal.find({ _id: req.params.id }, function(err, myData) {
            if (err) { console.log("We had an error"); }
            res.render('edit', {animal : myData[0] });
        });
    },
    update: function(req, res){
        // Model.update(conditions, update, options, callback); //treated as $set operation(No Overwrite)
        Animal.update({ _id: req.params.id }, req.body, function(err, myData){
            if (err) { console.log(err); }
            res.redirect('/');
        });
    },
    remove: function(req, res){
        Animal.remove({_id:req.params.id}, function(err, myData){
            if (err) {console.log(err)}
            console.log("We have removed: " + myData)
            res.redirect('/')
        })
    }

}
