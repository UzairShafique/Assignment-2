import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Simple from "../src/Simple"
import MediaCard from "./MediaCard"
import Angularlogos from "../src/angular2.png"
import reactlogos from "../src/reacttools.png"
import imagecss from "../src/cssimages.png"
import htmlsimage from "../src/aphtmls.png"
import Gate from "../src/Gate"
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  // <div><MediaCard contactsimageUrl={Angularlogos} title="Angular Js" body="This is javascript framework"/></div>,
  <div >
    <div style={{textAlign: "center",fontSize:"18px",color:"#dedede"}}><h2 >Assignment 2</h2><h4 >Media Card</h4></div>
    
    <MediaCard imageUrl={Angularlogos} title="Angular Js" body="This is javascript frameworks"/>
    <MediaCard imageUrl={reactlogos} title="React Js" body="This is javascript frameworks"/>
    <MediaCard imageUrl={imagecss} title="CSS " body="This is for styling of website "/>
    <MediaCard imageUrl={htmlsimage} title="HTML" body="This is main markup language "/>
   
    <div style={{textAlign: "center",fontSize:"24px",color:"#f6f6f6",marginTop:"30em"}}><h2 >JSX Element Passing Through props</h2></div>

     <Simple title="This is Stong/bold from JSx element" body={<div><strong>React</strong> a popular <strong>Javascript Framework</strong></div>}/>
    <Simple title="This is italic from JSx element" body={<div><strong>Angular</strong> a another popular <i>Javascript Framework</i></div>}/>

    <div style={{textAlign: "center",fontSize:"24px",color:"#f6f6f6",marginTop:"20em"}}><h2 >IsOpen or IsClosed props to check on true or false</h2></div>

    <Gate isOpen="false"/>
    
    <div style={{textAlign: "center",fontSize:"24px",color:"#f6f6f6",marginTop:"2em",backgroundColor: "#0e0e0e"}}><h4 >Made By Ozair Shafique</h4></div>

    {/* <MediaCard imageUrl={Angularlogos} title="Angular Js" body="This is javascript frameworks"/>
    <MediaCard imageUrl={Angularlogos} title="Angular Js" body="This is javascript frameworks"/>
    <MediaCard imageUrl={Angularlogos} title="Angular Js" body="This is javascript frameworks"/>
    <MediaCard imageUrl={Angularlogos} title="Angular Js" body="This is javascript frameworks"/> */}
  
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
