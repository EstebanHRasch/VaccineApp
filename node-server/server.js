const express = require('express'); // imported express module or top level class of express
const port = 9090;
const app = express(); //by invoking top level class we are initilizing the application
const cors = require("cors");
const router = require('./route/router');
const adminRouter = require('./route/adminRouter');
const userRouter = require('./route/userRouter');
const productRouter = require('./route/productRouter');
const cartRouter = require('./route/cartRouter');
const vaccineRouter = require('./route/vaccineRouter');
const hospitalRouter = require('./route/hospitalRouter');
const orderRouter = require('./route/orderRouter');
const cancelorderRouter = require('./route/cancelorderRouter');
const approvedorderRouter = require('./route/approvedorderRouter');

const adminApp = express();
const userApp = express();
const productApp = express();
const cartApp = express();
const vaccineApp = express();
const hospitalApp = express();
const orderApp = express();
const cancelorderApp = express();
const approvedorderApp = express();

app.use(cors());//cors - middleware is passed in express application to api's being public at global level
app.use('/static', express.static('public')); // serve static files like images css using static middle ware

app.use(express.json({limit:'2mb', extended:false})); //json middle-ware for setting request content type

app.use('/admin', adminApp);
adminApp.use('/', adminRouter);

app.use('/user', userApp);
userApp.use('/', userRouter);

app.use('/product', productApp);
productApp.use('/', productRouter);

app.use('/cart', cartApp);
cartApp.use('/', cartRouter);

app.use('/vaccine', vaccineApp);
vaccineApp.use('/', vaccineRouter);

app.use('/hospital', hospitalApp);
hospitalApp.use('/', hospitalRouter);

app.use('/order', orderApp);
orderApp.use('/', orderRouter);

app.use('/cancelorder', cancelorderApp);
cancelorderApp.use('/', cancelorderRouter);

app.use('/approvedorder', approvedorderApp);
approvedorderApp.use('/', approvedorderRouter);

app.use('/', router); // all the requests coming to express app are routed to router.js

console.log(`we are listening on port ${port} with url http://localhost:9090`)
app.listen(port)