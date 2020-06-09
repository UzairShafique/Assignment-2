import React, {useState} from 'react';


import './App.css';
import Simple from "../src/Simple"
function App() {
 
   
 //  const [islit, setlit] = useState(true)
 // const hellos=islit ? "lit" : "dark"
  return(
      
    <div className={`room ${hellos}`}>
      room is {islit  ? "lit" : "dark"}
      {/* <button onClick ={()=>setlit(!islit)}>flip</button> */}
      <button onClick ={() =>setlit(!islit)}>flip</button>
    </div>

  );
}

export default App;
