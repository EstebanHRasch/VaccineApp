let express = require("express");
let router = express.Router({}),
VaccineDataModel = require("../DataModel/vaccineDataModel");

//product api's
router.post('/api/savevaccine',(req, res)=>{
    console.log("vaccine data ", req.body);

    let vaccineDataObject = new VaccineDataModel(req.body); //this creates mongoose model to be used as to make queries
        
    vaccineDataObject.save((err, newVaccineData)=>{ //error first callback
        if (err) {
                res.send("Error in vaccine saving");
        } else {
                res.send(newVaccineData); //if product successfully saved we will get the mongodb unique id
        }
    })
})

router.get('/api/getvaccine',(req, res)=>{
    VaccineDataModel.find((err, vaccines)=>{ //error first callback
        if (err) {
                res.send("Error in getting vaccines");
        } else {
                res.send(vaccines);
        }
    })
})

module.exports = router;