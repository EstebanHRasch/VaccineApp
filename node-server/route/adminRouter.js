let express = require("express");
let router = express.Router({}), //router module only
AdminDataModel = require("../datamodel/userDataModel");

//user signin signup api
router.post("/api/signinup", (req, res)=>{ //localhost:9090/user/api/signinup
    console.log("data ", req.body); //user object that user creates entry

    AdminDataModel.findOne({userName: req.body.userName}, (error, data)=>{//error first callback
        if (error) {
            console.log("error admin sign in", error);
            res.send("Error Occurred in admin sign in");
        } else if(data) { //if data returned means user is already present
            res.send(data); //data will be the user object
        } else {
            let userObjToSave = new AdminDataModel(req.body); //it will map each key value pair like userName, password etc

            //this is a signup case and new user should be created
            userObjToSave.save((err, usrData)=>{
                if(err){
                    console.log("error admin sign in", error);
                    res.send("Error Occurred in admin sign up");
                }else{
                    //this is going to be the case of sign up the user
                    res.send(usrData); //data will be the user object with _id (to represent the new user saved)
                }
            })
        }

    })

});

module.exports = router;













// const express = require('express');
// const router = express.Router();
// const AdminModel = require("../datamodel/adminDataModel");

// router.get("/saveuser",(req, res)=>{
//     //we'll get data though query string parameters
//     console.log(req.query)//this should map with schema of adminuser (Name,Role, etc...)
//     let adminDataModelObject = new AdminModel(req.query);
    
//     adminDataModelObject.save((err, data)=>{
//         if(err){
//             console.log("error ", err)
//             res.send("An error occured!")
//         }else{
//             //data : user created with details passed in qs and _id from mongodb
//             res.json(data)
//         }
//     })

// })

// router.get("/getusers",(req, res)=>{    
    
//     AdminModel.find((err, data)=>{
//         if(err){
//             console.log("error ", err)
//             res.send("An error occured!")
//         }else{
//             //data : user created with details passed in qs and _id from mongodb
//             res.json(data)
//         }
//     })

// })


// router.all('*', function (req, res) {
//     res.send("This response is for all admin routes!")
// })


// module.exports = router;

// // task :
// // create an API to save student data using query string - keys are - name, age, address, session 
// // and add another field ThingsToLearn for another call
// // this will need a student data model, student router, etc