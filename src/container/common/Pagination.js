import React from "react";

function Pagination(props){
    
    let endRange = props.page*20
    let startRange =endRange- 19 
    return ( 
    <div className="">
        <h3>{startRange != 0 ? startRange : 1}-{endRange} of {props.total}</h3>
    </div>)
}

export default Pagination