let mongooseObj = require("mongoose"), //importing the mongoose module object
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

mongooseObj.connect("mongodb://127.0.0.1/mernstack8"); //creates db with name mernstack5 or opens a connection if already present

let VaccineSchema = new schemaObj({
    name: {type:String, required:true},
    type: {type:String},
    price: {type:Number},
    effect: {type:String},
    origin: {type:String},
    doses: {type:Number},
    desc: {type:String}
    },
{
    versionKey: false //false - set to false then it wont create in mongodb
});

let VaccineModel = mongooseObj.model("vaccine", VaccineSchema);
module.exports = VaccineModel;
//note: donot put versionkey to true or it will start throwing error

// 1. Register Vaccine (Name, Type, Price, Side Effect, Origin, Doses Required, Other Info (like What Strains Covers))
