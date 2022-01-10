let express = require("express");
let router = express.Router({}),
HospitalDataModel = require("../DataModel/HospitalDataModel");

//product api's
router.post('/api/savehospital',(req, res)=>{
    console.log("hospital data ", req.body);

    let hospitalDataObject = new HospitalDataModel(req.body); //this creates mongoose model to be used as to make queries
        
    hospitalDataObject.save((err, newHospitalData)=>{ //error first callback
        if (err) {
                res.send("Error in hospital saving");
        } else {
                res.send(newHospitalData); //if product successfully saved we will get the mongodb unique id
        }
    })
})

router.get('/api/gethospital',(req, res)=>{
    HospitalDataModel.find((err, hospitals)=>{ //error first callback
        if (err) {
                res.send("Error in getting hospitals");
        } else {
                res.send(hospitals);
        }
    })
})

module.exports = router;