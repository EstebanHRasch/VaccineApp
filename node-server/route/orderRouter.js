let express = require("express");
let router = express.Router({}),
OrderDataModel = require("../dataModel/orderDataModel");


router.post("/api/saveUserOrder", (req, res)=>{

    console.log("order data: ", req.body);

    let OrderDataObject = new OrderDataModel(req.body);

    OrderDataObject.save((err, newOrderData)=> {
        if(err) {
            res.send("Error order saving" + err);
        }
        else {
            res.send(newOrderData);
        }
    })
})


router.post("/api/getUserOrder", (req, res)=>{
    OrderDataModel.find({userid: req.body.userid}, (err, order)=>{
        if(err){
            res.send("Error Occured While getting order: " + err)
        }
        res.json(order);
    });
    
});


router.post("/api/cancelOrder", (req, res)=>{
    let index = req.body.orderIndex
    if(index < 0) {
        res.send("Error invalid negative order index")
    }
    OrderDataModel.findOne({userid: req.body.userid}, (err, orders)=>{
        if(err){
            res.send("Error Occured: "+ err)
        }
        else{
            return
        }
    })
})

module.exports = router;

/*
router.post("/api/saveUserOrder",(req, res)=>{

    OrderDataModel.findOne({userid: req.body.userid},(err, orderDbObj) => {
        if (err){
            console.log("got an error!");            
            res.send(err);
        }

        if (!orderDbObj) { //checks for null orders of given user
          console.log("No orders Present, Adding / Inserting!"); 
          let orderObj = new OrderDataModel(req.body);
          orderObj.save((err, data, next)=>{        
            if (err) {
                res.send("Error Occurred"+ err);
            }      
            res.json(data);
          });
        }else{ //update the order for given user
          console.log("Orders Present, Replacing / Updating!");
          orderDbObj.order = req.body.order;
          
          orderDbObj.save((err, data, next)=>{        
            if (err) {
                res.send("Error Occurred"+ err);
            }    
            //setTimeout(()=>{
                res.json(data);
            //},2000)  
            
          });
        }
  });
});
*/

/*router.post("/api/saveOrder",(req, res)=>{

    CartDataModel.findOne({userid: req.body.userid},(err, cartDbObj) => {
        if (err){
            console.log("Error While retrieving cart");            
            res.send(err);
        }

        if (!cartDbObj) { //checks for null cart of given user
            console.log("No cartitems Present, Adding / Inserting!"); 
            res.send("Error Cart is Empty")
        }

        OrderDataModel.findOne({userid: req.body.userid},(err, orders)=>{
            if (err) {
                console.log("Error while fetching recent orders");
                res.send(err);
            }
            else{
                if(!orders) {
                    orders = new OrderDataModel({
                        userid: req.body.userid,
                        orders: [{...cartDbObj.toObject(), time: new Date()}]
                    })
                }
                else{
                    orders.orders.push({ ...cartDbObj.toObject(), time: new Date() })
                }
                console.log(orders)

                orders.save((err, data, next)=>{

                    if(err) {
                        res.send("Error Occurred while saving order: " + err)
                    }
                    else{
                        res.json(data);
                    }
                });
            }
        });
    });

});
*/