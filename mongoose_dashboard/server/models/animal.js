var mongoose = require("mongoose")

var AnimalSchema = new mongoose.Schema({
	name: String,
    weight: Number,
    color: String},
    {timestamps: true})

mongoose.model("Animal", AnimalSchema)
