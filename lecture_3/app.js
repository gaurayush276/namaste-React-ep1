import React from "react";
import  ReactDOM from "react-dom";

const heading  =React.createElement('h1' , {} , "this is the react heading : ") ; 

const root = ReactDOM.createRoot(document.querySelector('.root')) ; 

const root1 = ReactDOM.createRoot(document.querySelector('.root1')) ; 

root.render(heading) ; 

const jsxHeading = <h1> this is a jsx made heading : </h1>

root1.render ( jsxHeading) ; 
