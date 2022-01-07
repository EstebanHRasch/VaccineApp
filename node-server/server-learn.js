//creating centralized space for 
const express = require('express') //importing the express class or module
const app = express() // instantiating express application
const adminApp = express(); //this application will handle all the request coming with admin in their route path

const port = 9000;

// serve static files like images css using static middleware
app.use("/static", express.static("public"))

app.get('/', function (req, res) {
    res.send('Hello World First Express API')
})

app.get('/api', function (req, res) {
    //passing data using query string : key value pairs that are typed after "?"
    //http://localhost:9000/api?name=padmaja&session=mernstack
    let qsObbj = req.query; //query string object as a request
    res.json(qsObbj)  
})

//seding data in route param
app.get('/getinfo/:productid/details', function (req, res) {    
    //http://localhost:9000/getinfo/29/details
    let routeParam = req.params["productid"]; //readin value coming in as request route
    routeParam == 25 ? 
    res.send("Awsome Product") 
    :
    res.send("Product is not available") 
})

app.get('/second', function (req, res) {
    //console.log("req ", req)
    console.log("res ", res)
    res.send('Hello World Second Express API')
})

// app.get('/new.js', function (req, res) {
//     res.sendFile(__dirname+"//public//index.html")
// })

//we are mounting path from main application to other application like (adminApp)
app.use("/admin", adminApp);

adminApp.get("/verifyuser/:id", (req, res)=>{
    let paramId = req.params["id"]
    paramId <100 ? res.send("User is verified by admin!")
    : res.send("No such user present to verify!")
})

//star or wildcard operartor : we muct put it at last
app.get('*', function (req, res) {
    res.sendFile(__dirname+"//public//index.html")
})

app.listen(port)

console.log(`server is listening on port ${port}`)
console.log(`api is accessible on http://localhost:${port}`)