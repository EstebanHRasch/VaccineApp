let express = require("express");
let router = express.Router({}),
ApprovedOrderDataModel = require("../dataModel/approvedorderDataModel");


router.post("/api/saveApprovedOrder", (req, res)=>{

    console.log("approved order data: ", req.body);

    let ApprovedOrderDataObject = new ApprovedOrderDataModel(req.body);

    ApprovedOrderDataObject.save((err, newApprovedOrderData)=> {
        if(err) {
            res.send("Error Approved order saving" + err);
        }
        else {
            res.send(newApprovedOrderData);
        }
    })
})


router.post("/api/getApprovedOrder", (req, res)=>{
    ApprovedOrderDataModel.find({userid: req.body.userid}, (err, approvedorder)=>{
        if(err){
            res.send("Error Occured While getting Approved order: " + err)
        }
        res.json(approvedorder);
    });
    
});

module.exports = router;