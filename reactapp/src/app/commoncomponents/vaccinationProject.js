import React, {Fragment, PureComponent} from "react";
import PropTypes from "prop-types";
import DummyComponent from "./dummyComponent";

//var ObjVehicle = new Vehicle({});
// ObjVehicle.getDetails(); //details 

export default class Home extends PureComponent{ //has implementation of shuoldComponentUpdate and does comparison of each
//export default class Home extends React.Component{

    constructor(props, context){
        super(props);
        this.state = {
            headerNameForChild : "Header Name From Home Vaccine Component",
            textBoxValue : "This is a text box",
            name : "default Name",
            address : "Default Address",
            age : 66
        }

        //ref - keyword uses
        this.inputAddress = React.createRef(); //as we dont have any html selectors available in react so this provides a reference to html
        //this.inputAddress.current.focus(); //view can't be accessed in constructor
        
        this.inputAge = React.createRef();        
    }

    //creation life cycle method
    componentDidMount(){
        console.log("componentDidMount")
        //view is accessible
        setTimeout(() => {
            this.inputAddress.current.focus();
            this.inputAddress.current.value = " Component DidMount";   
            
        }, 3000);
    }

    //destruction life cycle methods
    componentWillUnmount(){
        console.log("componentWillUnmount");
        //previous component needs to clear all subscriptions and any pending calls while navigating to other component
    }

    //update lifecycle method
    //this asks us to decide whether we need to stop calling the render method on state change
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("shouldComponentUpdate");
    //     console.log("nextState",nextState);
    //     console.log("nextProps", nextProps);
        
    //     //return true;
    //     if (nextState.name == this.state.name) {
    //         return false; //to not call the render method
    //     } else {
    //         return true;    
    //     }
    // }

    // getSnapshotBeforeUpdate(prevState, prevProps){
    //     console.log("getSnapshotBeforeUpdate");
    //     console.log("prevState", prevState);
    //     console.log("prevProps", prevProps);
    //     return {
    //         prevState,
    //         prevProps
    //     }
    // }

    // componentDidUpdate(prevState, prevProps){
    //     console.log("componentDidUpdate");
    //     console.log("prevState",prevState);
    //     console.log("prevProps", prevProps);
    // }


    changeEventHandler = (evt)=>{
        const target = evt.target;
        console.log('target value', target.value)
        //this.state.textBoxValue = target.value;        
        //this.forceUpdate();//skips shouldcomponentupdate and calls render immediatly

        //set state api - is tightly coupled with react change detection framework and works in async, batch processing
        this.setState({
            textBoxValue : target.value
        })
        console.log('state value'+ this.state.textBoxValue);

        evt.preventDefault();
    }

    changeNameOnType = (evt)=>{
        const target = evt.target;
        //this.state.textBoxValue = target.value;        
        //this.forceUpdate();//skips shouldcomponentupdate and calls render immediatly

        //set state api - is tightly coupled with react change detection framework and works in async, batch processing
        this.setState({
            name : target.value
        })
        console.log('state value'+ this.state.textBoxValue);

        evt.preventDefault();
    }

    updateNameEvent = (evt)=>{        
        //this.state.name = "Estban";        
        //this.forceUpdate();//skips shouldcomponentupdate and calls render immediatly
       
        this.setState({
            name : "Estban"
        })
        evt.preventDefault();
    }

    //function to be executed by child component to propel the data
    getDataFromChild = (header)=>{

        //alert("Header value from child "+ header)
        this.setState({
            headerNameForChild:header
        })
    }

    onSubmit = (evt)=>{
        //alert("Form Submitted!!");
        let age = this.inputAge.current.value;
        let address = this.inputAddress.current.value;
        
        this.setState({
            age,
            address
        })

        evt.preventDefault();
    }

    render() {
        console.log("Home Render ")
        return(
            <div className={"loadimage form"} style={{backgroundImage: "url(/images/hm_pic4.jpg)"}}>
            {/* <p>{this.state.name}</p> */}
            {/* <img src={"./images/hm_pic4.jpg"} /> */}
            {/* {this.state.Title} */}
            <b className="feature">{"Below Feature's We've Implemented in our project :"}</b>
            <ul>                     
                <li>Sign up new users</li>
                <li>Login existing users.</li>
                <li>Add products/items to create product collection.</li>
                <li>Allow user's to add to cart.</li>
                <li>Save the user's cart.</li>
                <li>Checkout and pay for items.</li>
                <li>Allow users to cancel the order.</li>
                <li>Allow users to reorder the cart.</li>
                <li>Allow users to give ratings to each product.</li>
                <li>Have notifications on top right with logout.</li>
            </ul>
                {/* <h1>Header Name - {this.props.headerName}</h1>
                <h1>Header Name - {this.state.headerNameForChild}</h1>
                <input type="text" value={this.state.textBoxValue} onChange={this.changeEventHandler} /> */}
                {/* <label>
                    Address:
                         <input type="text" ref={this.inputAddress} placeholder="Please enter address"/>
                     </label> */}

                {/* An input form element whose value is controlled by React in this way is called a “controlled component”. */}
                    
                {/* <input type="text" placeholder="Please enter your name" 
                        value={this.state.name} 
                        onChange={this.changeNameOnType}/>
                
                <button className={"form-control btn btn-primary col-md-2"} 
                    onClick={this.updateNameEvent}>Update Name</button> */}

                {/* We are going to create an uncontrolled html form with html elements, 
                it is controlled element values are not going to be part of react state */}

                {/* <form onSubmit={this.onSubmit}>
                    <label>
                         Age:
                         <input type="text" ref={this.inputAge} placeholder="Please enter age"/>
                    </label>
                    
                    <label>
                         Address:
                         <input type="text" ref={this.inputAddress} placeholder="Please enter address"/>
                    </label>
                    <input type="submit" value="Submit" />

                    <label>
                         Age: {this.state.age}
                         Address: {this.state.address}
                    </label>
                </form>

                <DummyComponent headerName={this.state.headerNameForChild} getData={this.getDataFromChild}/> */}
            </div>
        )
    }
}


// Home.defaultProps = {
//     headerName : "This is Default Home Header"
// }

Home.propTypes = {
    headerName : PropTypes.string.isRequired
}

// System to help - Covid19 Vaccination System

// Application should be developed to help government meet the vaccination task in collboration with Government and Private hospitals
// Setup Needs to be done by students (React(WebPack) and NodeAPI) both

// We Should Have an Admin Section (or Hospital Section) to 
// 1. Register Vaccine (Name, Type, Price, Side Effect, Origin, Doses Required, Other Info (like What Strains Covers))
// 2. List Of Hospitals (Name, Address, Type(Govt/Private), Charges)
// 3. Approver screen to approve the User, Hospital, and Select Vaccine for a given time
// 4. Once Approved should show all Vaccinated persons list (and number of doses supplied)

// User Section/ Pateint Section To (Normal Site)
// 1. Should Allow users to register with all basic details (Name, Age, Profession, Contact, Address, Gender, Any Disease, Medical Certificate, etc)
// 2. Upon Registered User should be able to see a screen with - Hospital Info, Vaccine, (Number of Doses Required), Appointment, Charges To Payment
// 3. Once Charges are paid (just make an entry upon Pay click with confirmation) take user to new screen schedule
// 4. On Schedule screen if Current date less Scheduled Date show all details of schedule for the user, if its more than show successfully vaccinated

// Reporting 
// 1. Show reports on the basis of Age, Gender, Pre-Existing Disease, Medical Practitionar etc
// 2. Bar Chart and Pie Chart Both -> d3 reports module of
// 3. Report to show number of doses administered each day
// 4. Report to Show Percentage of Population Covered

// WatchList
// 1. Show in a watch list, all the data for vaccination - like age%, gender%, total coverage %
// 2. This watch list show keep on moving while showing the details

// QR Code to make payment //using qr code generator module
// Create a QR code once scan is done

// Page highlights in banner