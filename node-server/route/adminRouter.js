const express = require('express');
const router = express.Router();
const AdminModel = require("../datamodel/adminDataModel");

router.get("/saveuser",(req, res)=>{
    //we'll get data though query string parameters
    console.log(req.query)//this should map with schema of adminuser (Name,Role, etc...)
    let adminDataModelObject = new AdminModel(req.query);
    
    adminDataModelObject.save((err, data)=>{
        if(err){
            console.log("error ", err)
            res.send("An error occured!")
        }else{
            //data : user created with details passed in qs and _id from mongodb
            res.json(data)
        }
    })

})

router.get("/getusers",(req, res)=>{    
    
    AdminModel.find((err, data)=>{
        if(err){
            console.log("error ", err)
            res.send("An error occured!")
        }else{
            //data : user created with details passed in qs and _id from mongodb
            res.json(data)
        }
    })

})


router.all('*', function (req, res) {
    res.send("This response is for all admin routes!")
})


module.exports = router;

// task :
// create an API to save student data using query string - keys are - name, age, address, session 
// and add another field ThingsToLearn for another call
// this will need a student data model, student router, etc