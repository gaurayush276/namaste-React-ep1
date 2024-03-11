 import React from "react";
 import ReactDOM from "react-dom" ; 

const div = React.createElement('div' ,{id: "parent_div"} ,
React.createElement('h1' ,{id:'children_heading'} , "this is a heading")) ; 




const root = ReactDOM.createRoot(document.querySelector('.root')) ; 

//   injecting the div insise the root ; 
root.render(div) ; 

       const div2 = React.createElement('div' , {id :"parent"} ,
        React.createElement('h1' , {id :"first_heading"} , "this is my first heading inside the root1")  );                   
        const root1 = ReactDOM.createRoot(document.querySelector('.root1')) ; 

        root1.render(div2) ;