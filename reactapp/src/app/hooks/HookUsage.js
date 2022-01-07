import React, { useState, useCallback} from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";


function HookUsage(params) {

    
    let [age, setAge] = useState(66); //one hook and replica of state and setState
    //this.state = {age : 66}
    //this.setState({age:newValue})

    let incrementAge = useCallback(()=>{
        setAge(age+1)
    },[age]);

    let [salary, setSalary] = useState(20000);

    let incrementSalary = useCallback(()=>{
        setSalary(salary + 100)
    },[salary]);


    return(
        <>
            <Title />
            <Count text={"Age"} count={age}/>
            <Button handleClick={incrementAge}>Increment Age</Button>

            <Count text={"Salary"} count={salary}/>
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </>
    )
}

export default HookUsage;