
import React from "react"
import "../src/Gate.css"
function Gate(props){

      
    return(
       
        <div className="sectiongrid">
            <h4>{props.isOpen === "true" ? "Open" : "Closed"}</h4>
        </div>
    )
}

 
export default Gate