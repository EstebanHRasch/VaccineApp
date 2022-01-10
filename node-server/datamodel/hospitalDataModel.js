let mongooseObj = require("mongoose"), //importing the mongoose module object
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

mongooseObj.connect("mongodb://127.0.0.1/mernstack8"); //creates db with name mernstack5 or opens a connection if already present

let HospitalSchema = new schemaObj({
    name: {type:String, required:true},
    address: {type:String},
    vaccines: {type:String},
    type: {type:String},
    charges: {type:Number}
    },
{
    versionKey: false //false - set to false then it wont create in mongodb
});

let HospitalModel = mongooseObj.model("hospital", HospitalSchema);
module.exports = HospitalModel;



// 2. List Of Hospitals (Name, Address, Type(Govt/Private), Charges)
// 3. Approver screen to approve the User, Hospital, and Select Vaccine for a given time
// 4. Once Approved should show all Vaccinated persons list (and number of doses supplied)