let express = require("express");
let router = express.Router({}),
OrderDataModel = require("../dataModel/orderDataModel");


router.post("/api/saveUserCancelOrder", (req, res)=>{

    console.log("order data: ", req.body);

    let OrderDataObject = new OrderDataModel(req.body);

    OrderDataObject.save((err, newOrderData)=> {
        if(err) {
            res.send("Error cancel order saving" + err);
        }
        else {
            res.send(newOrderData);
        }
    })

})

router.post("/api/getUserCancelOrder", (req, res)=>{
    OrderDataModel.find({userid: req.body.userid}, (err, order)=>{
        if(err){
            res.send("Error Occured While getting order: " + err)
        }
        res.json(order);
    });
    
});

module.exports = router;