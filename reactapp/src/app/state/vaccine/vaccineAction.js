import * as ActionTypes from "../actionTypes";


export const saveVaccine = (vaccine)=>{
    console.log("Vaccine ", vaccine);
    return function (dispatch) {
        //dispatch(loading(true));

        window.fetch("http://localhost:9090/vaccine/api/savevaccine",{
            method: 'POST', //rest method type 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(vaccine)
        })
        .then(vaccineresp => vaccineresp.json())
        .then((vaccineresp)=>{
            console.log("vaccine save response ", vaccineresp);
            //dispatch(loading(false));
            dispatch(fetchVaccines());
        })
        .catch((err)=>{
            console.log("Error While Saving Vaccine", err)
        })
    }
};

export const fetchVaccines = ()=>{
    return function (dispatch) {
        //dispatch(loading(true));

        window.fetch("http://localhost:9090/vaccine/api/getvaccine",{
            method: 'GET' //rest method type 
        })
        .then(vaccineresp => vaccineresp.json())
        .then((vaccineresp)=>{
            console.log("vaccine save response ", vaccineresp);
            //dispatch(loading(false));
            dispatch(addVaccineToStore(vaccineresp));
        })
        .catch((err)=>{
            console.log("Error While Saving vaccine", err)
        })
    }  
}

export const addVaccineToStore = (vaccines)=>({
    type : ActionTypes.ADD_VACCINES_TOSTORE,
    payload : {vaccines}
})