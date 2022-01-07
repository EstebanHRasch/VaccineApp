let express = require("express");
let router= express.Router({caseSensitive:true});

router.get("/first",(req, res)=>{
    res.json({
        "using router": "Yes",
        "api name" : "first"
    })
})

router.get('/api', function (req, res) {
    //passing data using query string : key value pairs that are typed after "?"
    //http://localhost:9090/api?name=padmaja&session=mernstack
    let qsObbj = req.query; //query string object as a request
    res.json(qsObbj)  
})

//seding data in route param
router.get('/getinfo/:productid/details', function (req, res) {    
    //http://localhost:9090/getinfo/29/details
    let routeParam = req.params["productid"]; //readin value coming in as request route
    routeParam == 25 ? 
    res.send("Awsome Product") 
    :
    res.send("Product is not available") 
})

router.get('/second', function (req, res) {
    //console.log("req ", req)
    console.log("res ", res)
    res.send('Hello World Second Express API')
})

router.get('/', function (req, res) {
    res.send('Hello World First Express API')
})

router.get("*",(req, res)=>{
    res.json({
        "using router": "Yes",
        "api name" : "default"
    })
})

module.exports = router;