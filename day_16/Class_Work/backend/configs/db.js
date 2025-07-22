const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb+srv://johnbadhan:AnaDeArma5@cluster0.1zatmoh.mongodb.net/myFirstDB?retryWrites=true&w=majority&appName=Cluster0");

module.exports={
    connection
}