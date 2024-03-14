import React from "react";
import ReactDOM from "react-dom";

const div = React.createElement('div' ,{id: "parent_div"} ,
React.createElement('h1' ,{id:'children_heading'} , "this is a heading")) ; 

const root1 = ReactDOM.createRoot(document.querySelector('.root1'));

// Injecting the div inside the root
root1.render(div);


const root = ReactDOM.createRoot(document.querySelector('.root')) ; 

//   injecting the div insise the root ; 
root.render(div) ; 

// Creating the element by JSX
 const jsxheading = <h1> this is a heading created by JSX : </h1>
 console.log(jsxheading) ; 