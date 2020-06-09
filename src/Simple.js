import React from 'react';
import "../src/Simple.css"
function Simple(props) {
    return (
        <div className="sections">
            <div style={{display: 'flex', flexDirection: 'row', float: "left",marginLeft: "10em"}}>
        <div className="cardes">
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      </div>
        </div>
     </div>

    )
}

export default Simple;
