import React, {useState, Fragment} from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveHospital } from "../../../state/hospital/hospitalAction";
import DisplayHospital from "./DisplayHospital";

let HospitalComponent = ()=>{
    
    const Admin = useSelector((state)=>state.adminReducer.admin);
    const User = useSelector((state)=>state.userReducer.user);
    const defaultHospital = useSelector((state)=>state.hospitalReducer.defaultHospital)
    const dispatchToSaveHospital = useDispatch()

    //initializes the name and returns a callback to save name on state change
    // 2. List Of Hospitals (Name, Address, Type(Govt/Private), Charges)
    const [name, setName] = useState(defaultHospital.name); 
    const [address, setAddress] = useState(defaultHospital.address);
    const [vaccines, setVaccines] = useState(defaultHospital.vaccines);
    const [type, setType] = useState(defaultHospital.type);
    const [charges, setCharges] = useState(defaultHospital.charges);

    const saveHospitalClick = (evt) => {
        let hospitalObj = {name, address, vaccines, type, charges};
        alert("We are going to save this hospital - "+ JSON.stringify(hospitalObj));
        
        dispatchToSaveHospital(saveHospital(hospitalObj))

        evt.preventDefault()
    }

    return(
        <Fragment>
        <h1>Hospital Component</h1>
             
        {
        Admin && Admin.adminName.length > 0 ?
         <> 
             <h2>Admin Hospital </h2>
            <section className={"componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>Hospital Name</b>
                        <input type="text" className="form-control col-md-6" value={name} maxLength={25}
                            onChange={(evt)=>setName(evt.target.value)}
                        />
                    </div>

                    <div className="col-md-12">
                        <b>Address </b>
                        <input type="text" className="form-control col-md-6" value={address} 
                          placeholder="Hospital Address"
                          onChange={(evt)=>setAddress(evt.target.value)} />
                    </div>

                    <div className="col-md-12">
                        <b>Vaccines </b>
                        <input type="text" className="form-control col-md-6" value={vaccines} 
                          placeholder="Vaccines Available"
                          onChange={(evt)=>setVaccines(evt.target.value)} />
                    </div>

                    <div className="col-md-12">
                        <b>Type </b>
                        <input type="text" className="form-control col-md-6" value={type} 
                          placeholder="Vaccine Type"
                          onChange={(evt)=>setType(evt.target.value)} />
                    </div>

                    <div className="col-md-12">
                        <b>Charges </b>
                        <input type="number" className="form-control col-md-6" value={charges} 
                          placeholder="Hospital Charges"
                          onChange={(evt)=>setCharges(evt.target.value)} />
                    </div>
                    
                    <input type="button" className={"form-control btn btn-primary col-md-3"} 
                        value={"Save Hospital"} 
                        onClick={saveHospitalClick}/>
                    </div>
                <br/>
                <DisplayHospital/>
            </section>
         </>
     : User && User.userName.length > 0 ?
     
     <Fragment>

            <h1>Available Hospitals: </h1>

            <>
            <section>
            <DisplayHospital/>
            </section>
         </>

     </Fragment>

     : 
            <Fragment>
                <h1>No Admin or User Logged in</h1>

            </Fragment>
    
    }
    
   
    </Fragment>
    )
}
export default HospitalComponent;
