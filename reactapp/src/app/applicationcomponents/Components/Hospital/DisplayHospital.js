import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchHospitals } from "../../../State/Hospital/HospitalAction";
import DisplayHospitalDetails from "./DisplayDetailHospital";

const DisplayHospital = (props)=>{
    const hospitalList = useSelector((state)=>state.hospitalReducer.hospitals)

    //we need to make call to fetch products
    //like fetch we have axios it uses async and await
    const fetchHospitalsDispatch = useDispatch();

    //componentDidMount : by initializing the parameters as dependency
    useEffect(()=>{
        fetchHospitalsDispatch(fetchHospitals())
    },[])

    return(
        <>
            {hospitalList && hospitalList.length > 0 ?
                hospitalList.map((hospital)=>{
                    return <DisplayHospitalDetails hospital={hospital} key={hospital._id} />
                })
                :
                <b>{"No Hospitals To Display"}</b>}
        </>
    )

}

export default DisplayHospital;