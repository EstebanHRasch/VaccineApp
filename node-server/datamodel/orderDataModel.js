let mongooseObj = require("mongoose"), //importing the mongoose module object
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

mongooseObj.connect("mongodb://127.0.0.1/mernstack8"); //creates db with name mernstack5 or opens a connection if already present

let OrderSchema = new schemaObj({
    userid: {type:String, required:true},
    order: Object,
    dateTime: { type: String },
    appDate : { type: String }
    },
{
    versionKey: false //false - set to false then it wont create in mongodb
});

let OrderModel = mongooseObj.model("orders", OrderSchema);
module.exports = OrderModel;
//note: donot put versionkey to true or it will start throwing error