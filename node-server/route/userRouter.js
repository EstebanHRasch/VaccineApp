let express = require("express");
let router = express.Router({}), //router module only
UserDataModel = require("../datamodel/userDataModel");

//user signin signup api
router.post("/api/signinup", (req, res)=>{ //localhost:9090/user/api/signinup
    console.log("data ", req.body); //user object that user creates entry

    UserDataModel.findOne({userName: req.body.userName}, (error, data)=>{//error first callback
        if (error) {
            console.log("error sign in", error);
            res.send("Error Occurred in sign in");
        } else if(data) { //if data returned means user is already present
            res.send(data); //data will be the user object
        } else {
            let userObjToSave = new UserDataModel(req.body); //it will map each key value pair like userName, password etc

            //this is a signup case and new user should be created
            userObjToSave.save((err, usrData)=>{
                if(err){
                    console.log("error sign in", error);
                    res.send("Error Occurred in sign up");
                }else{
                    //this is going to be the case of sign up the user
                    res.send(usrData); //data will be the user object with _id (to represent the new user saved)
                }
            })
        }

    })

});

module.exports = router;