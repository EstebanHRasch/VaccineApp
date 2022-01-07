import React from "react";
import Footer from "./footerComponent"

//functional component using arrow function
let DummyComponent = (props)=>{
    let componentHeader = props.headerName ? props.headerName : "Static Dummy Component";
    
    //props.headerName = "xyz"; //props are immutable and cant be updated in child


    //props.getData("Header from Dummy Component")
    return(
        <>
            {/* <Footer/> */}
            <h1>Dummy Component</h1>
            <h2>{componentHeader}</h2>
            {/* <label>{props.time}</label>
            {props.children[0]}
            {props.children[1]} */}
            <button className={"form-control btn btn-primary col-md-2"} 
                        onClick={()=>props.getData("Header from Dummy Component")}>Update Header From Child</button>
        </>
    )

}

export default DummyComponent;