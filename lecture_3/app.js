// pakage babel is responsible for converting the jsx code into the react Elements


import React from "react";
import  ReactDOM from "react-dom/client";

const heading  =React.createElement('h1' , {} , "this is the react heading : ") ; 

const root = ReactDOM.createRoot(document.querySelector('.root')) ; 

const root1 = ReactDOM.createRoot(document.querySelector('.root1')) ; 

const root2 = ReactDOM.createRoot(document.querySelector('.root2')) ; 

const root3 = ReactDOM.createRoot(document.querySelector('.root3')) ; 

root.render(heading) ; 
console.log( heading ) ; 

console.log("hello") ;


//   ifyou are using multiple lines to write the same code you have tpo wrap this code in the parenthesis const jsxHeading = (<h1> 
// this is a jsx made heading : 
// </h1>  )


// use uppercase for functional components name declatration 
const HeadingComponent = () => {
return <h1> this is functional component</h1> ; 
} ; 
console.log("heading component ") ;
console.log( <HeadingComponent/>);

root2.render( < HeadingComponent /> ) ; 
// added 
const jsxHeading = <h1  className="jsx_heading"> this is a jsx made heading : </h1>

console.log(jsxHeading) ; 
root1.render ( jsxHeading) ; 


// a function that returns a pices of jsx code is functional component 
 

// functional components and how can we insert another element using { }  ; 


const title = <h1> this is an inserted element  :</h1>

const Insert = () => (
   <div id="container"> 
    <h1> this is a heading tag : </h1> 
    {/* these three are all same you can use any one of  them to call functional components */}
    <HeadingComponent /> 
    <HeadingComponent>  </HeadingComponent>
    {HeadingComponent()}

    {1000 + 424 }
    {<h2> another heading directly inserted  .</h2>}
   {title} 
   </div>
   
    
) ; 
  

root3.render ( <Insert />  )  ; 