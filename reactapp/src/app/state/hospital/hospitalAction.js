import * as ActionTypes from "../actionTypes";

export const saveHospital = (hospital)=>{
    console.log("Hospital ", hospital);
    return function (dispatch) {
        //dispatch(loading(true));

        window.fetch("http://localhost:9090/hospital/api/saveHospital",{
            method: 'POST', //rest method type 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(hospital)
        })
        .then(hospitalresp => hospitalresp.json())
        .then((hospitalresp)=>{
            console.log("hospital save response ", hospitalresp);
            //dispatch(loading(false));
            dispatch(fetchHospitals());
        })
        .catch((err)=>{
            console.log("Error While Saving Hospital", err)
        })
    }
};

export const fetchHospitals = ()=>{
    return function (dispatch) {
        //dispatch(loading(true));

        window.fetch("http://localhost:9090/hospital/api/gethospital",{
            method: 'GET' //rest method type 
        })
        .then(hospitalresp => hospitalresp.json())
        .then((hospitalresp)=>{
            console.log("hospital save response ", hospitalresp);
            //dispatch(loading(false));
            dispatch(addVaccineToStore(hospitalresp));
        })
        .catch((err)=>{
            console.log("Error While Saving Hospital", err)
        })
    }  
}

export const addHospitalToStore = (hospital)=>({
    type : ActionTypes.ADD_HOSPITALS_TOSTORE,
    payload : {hospital}
})