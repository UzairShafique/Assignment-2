import React from 'react';
import "../src/Custom.css"  
function MediaCard(props) {
  
      return (

 
          <div className="panel panel-default" >
            
              <div className="columns">
                <div className="cards">
              <h2>{props.title}</h2>
              <p>{props.body}</p>
              <img alt="imageurl" className="images" src={props.imageUrl}/>
                </div>
              </div>
          </div>
          
         
      )
  }
 
  export default MediaCard;
  