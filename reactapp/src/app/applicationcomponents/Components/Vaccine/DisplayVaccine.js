import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchVaccines } from "../../../State/Vaccine/VaccineAction";
import DisplayVaccineDetails from "./DisplayDetailVaccine";

const DisplayVaccine = (props)=>{
    const vaccineList = useSelector((state)=>state.vaccineReducer.vaccines)

    //we need to make call to fetch products
    //like fetch we have axios it uses async and await
    const fetchVaccinesDispatch = useDispatch();

    //componentDidMount : by initializing the parameters as dependency
    useEffect(()=>{
        fetchVaccinesDispatch(fetchVaccines())
    },[])

    return(
        <>
            {vaccineList && vaccineList.length > 0 ?
                vaccineList.map((vaccine)=>{
                    return <DisplayVaccineDetails vaccine={vaccine} key={vaccine._id} />
                })
                :
                <b>{"No Vaccines To Display"}</b>}
        </>
    )

}

export default DisplayVaccine;