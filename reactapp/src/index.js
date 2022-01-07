console.log("Entry File of Front End - React Application")
//alert("The first code after setup")
import React from "react";
import { render } from "react-dom"; //it is responsible for comparison of virtual dom to actual dom, allows us to render application (app) into root element
import { Provider } from "react-redux"; //this helps us to provide store in each react component

import store from "./app/state/store";
// import { AppComponent } from "./app/app"; //named import
import AppComponent from "./app/app"; //default import

render( //requires two parameters 1.the app component to be rendered, 2. root element over which this needs to be rendered
    <Provider store={store}>
        <AppComponent/>
    </Provider>,
    document.getElementById("root") //bootstrapping of application component to root element(container)
)

//create reactapp folder
//npm init
//create webpackconfig.js - copy paste
//package.json - copy paste
//npm i
//npm start