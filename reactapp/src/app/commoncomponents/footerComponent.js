import React from "react";

let Footer = (props)=>{ //functional component
    // props.name = "New Name";

    return(
        <div className="footer">
                Vaccine App
                {/* {`This is footer component. Received address through props is ${props.address} and Name is ${props.name}
                ${props.user.name}
                ${props.user.pwd}
                `}

                {props.children[0]}
                {props.children[1]} */}
        </div>
     )
}

export default Footer;