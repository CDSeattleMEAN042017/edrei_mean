var mongoose = require("mongoose")
var Person = mongoose.model("Person")

module.exports = {
    index: function(req, res){
        Person.find({}, function(err, myData){
            if (err){
                console.log("get/index error:" + err)
            } else {
                if (myData[0]){
                    res.json(myData)
                } else {
                    res.json({ERROR: "No Users Found"})
            }

            }
        })
    },
    createNew: function(req, res){
        Person.create(req.params, function(err, myData){
            if (err){
                console.log("Error adding new Person: " + err)
            } else {
                res.redirect("/")
            }
        })
    },
    remove: function(req, res){
        Person.remove({name: req.params.name}, function(err){
            if(error){
                console.log("Error removing Person: " + err)
            } else {
                res.redirect("/")
            }
        })
    },
    show: function(req, res){
        Person.find({name:req.params.name}, function(err, myData){
            if (err){
                console.log("Error finding Person: " + err)
            } else {
                res.json(myData[0])
            }
        })
    }


}
