import React, {useState, Fragment} from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveVaccine } from "../../../state/vaccine/vaccineAction";
import DisplayVaccine from "./DisplayVaccine";

let VaccineComponent = ()=>{
    
    const Admin = useSelector((state)=>state.adminReducer.admin);
    const User = useSelector((state)=>state.userReducer.user);
    const defaultVaccine = useSelector((state)=>state.vaccineReducer.defaultVaccine)
    const dispatchToSaveVaccine = useDispatch()

    //initializes the name and returns a callback to save name on state change
    const [name, setName] = useState(defaultVaccine.name); 
    const [type, setType] = useState(defaultVaccine.type);
    const [price, setPrice] = useState(defaultVaccine.price);
    const [effect, setEffect] = useState(defaultVaccine.effect);
    const [origin, setOrigin] = useState(defaultVaccine.origin);
    const [doses, setDoses] = useState(defaultVaccine.doses);
    const [desc, setDescription] = useState(defaultVaccine.desc);

    const saveVaccineClick = (evt) => {
        let vaccineObj = {name, type, price, effect, origin, doses, desc};
        alert("We are going to save this vaccine - "+ JSON.stringify(vaccineObj));
        
        dispatchToSaveVaccine(saveVaccine(vaccineObj))

        evt.preventDefault()
    }

    return(
        <Fragment>
        <h1>Vaccine Component</h1>
             
        {
        Admin && Admin.adminName.length > 0 ?
         <> 
             <h2>Admin Vaccines </h2>
            <section className={"componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>Vaccine Name</b>
                        <input type="text" className="form-control col-md-6" value={name} maxLength={25}
                            onChange={(evt)=>setName(evt.target.value)}
                        />
                    </div>

                    <div className="col-md-12">
                        <b>Type </b>
                        <input type="text" className="form-control col-md-6" value={type} 
                          placeholder="Vaccine Type"
                          onChange={(evt)=>setType(evt.target.value)} />
                    </div>

                    <div className="col-md-12">
                        <b>Price </b>
                        <input type="number" className="form-control col-md-6" value={price} 
                          placeholder="Vaccine Price"
                          onChange={(evt)=>setPrice(evt.target.value)} />
                    </div>

                    <div className="col-md-12">
                        <b>Effect </b>
                        <input type="text" className="form-control col-md-6" value={effect} 
                          placeholder="Vaccine Effect"
                          onChange={(evt)=>setEffect(evt.target.value)} />
                    </div>

                    <div className="col-md-12">
                        <b>Origin </b>
                        <input type="text" className="form-control col-md-6" value={origin} 
                          placeholder="Vaccine Origin"
                          onChange={(evt)=>setOrigin(evt.target.value)} />
                    </div>

                    <div className="col-md-12">
                        <b>Doses </b>
                        <input type="number" className="form-control col-md-6" value={doses} 
                          placeholder="Vaccine Doses"
                          onChange={(evt)=>setDoses(evt.target.value)} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Description </b>
                    <input type="text" className="form-control col-md-6" value={desc} 
                          placeholder="Please Describe the vaccine"
                          onChange={(evt)=>setDescription(evt.target.value)} />
                    </div>
                    
                    <input type="button" className={"form-control btn btn-primary col-md-3"} 
                        value={"Save Vaccine"} 
                        onClick={saveVaccineClick}/>
                    </div>
                <br/>
                <DisplayVaccine/>
            </section>
         </>
     : User && User.userName.length > 0 ?
     
     <Fragment>

            <h1>User Vaccines</h1>

            <>
            <section>
            <DisplayVaccine/>
            </section>
         </>

     </Fragment>

     : 
            <Fragment>
                <h1>No Admin or User Logged in {Admin.adminName}</h1>

            </Fragment>
    
    }
    
   
    </Fragment>
    )
}
export default VaccineComponent;

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