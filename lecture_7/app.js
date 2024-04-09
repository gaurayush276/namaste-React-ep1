 

// for more than one card 

import React from "react";
import ReactDOM  from "react-dom/client";
import { useState,useEffect } from "react";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import  About from "./component/about" ; 
import Contact from "./component/contact" ; 

// here i made a header and put it into the appLayout 
const Header = () => {
    return (
        <div className="header">
            <div className="logo-header">
            <img  
          src="https://terrigalchargrill.com/cdn/shop/files/TCC_9.png?v=1691884438"
          alt="App Logo"
          className="logo"
          />
          </div>
        <ul>
            <li>About</li>
            <li>Home</li>
            <li>Contact us</li>
            <li>Terms</li>
        </ul>
        </div>
    );
};

// a card that gonna show the resaurants info 
 
// functional element 
const Card = ({ resData }) => {
  if (!resData || !resData.info) {
      return null; // Return null if resData or resData.info is undefined
  }

  const { name, cuisines, avgRating, costForTwo } = resData.info;
 
  return (
      <div className="card">
          <div className="cusine-box">
              <img className="cusines" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId} alt="Cuisine" />
          </div>
          <ul>
              <li><h1 className="res_name">{name}</h1></li>
              <li>{cuisines.join(", ")}</li>
              <li>{avgRating}</li>
              <li>{costForTwo}</li>
          </ul>
      </div>
  );
};




// state variable
// first argument is the initial one and second one is the modified one 
const Main = () => {
 
 
let [resList, setresList] = useState(  [ ] ) ; 
console.log("body rendered") ; 
      // useEffect function is called after the function has been rendered 
//  to check this just add a debugger before main div  

useEffect (  ()=>{ 
  fetchData() ; 
} ,[]) ;

const fetchData = async () => {
  // using the live data via api : 
     const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.464213157180215&lng=80.35135354846716&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING") ; 
     const json = await data.json() ; 
     console.log(json) ; 
     setresList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants  ) ; 
     
}  ; 


  return (
      <div className="main">

            <button className="filter" onClick={()=>{
              console.log("button clicked") ; 8/9
              console.log(resList) ; 
              const filtered = resList.filter((traverse)=>traverse.info.avgRating>4)
              setresList(filtered  ) ; 
            
            }}> Top Rated Restaurant</button>
        
          <div className="res-container">
              {/* <Card resData={resList[0]} />
              <Card resData={resList[1]} />
              <Card resData={resList[2]} />
              <Card resData={resList[3]} />
              <Card resData={resList[4]} />
              <Card resData={resList[5]} />
              <Card resData={resList[6]} /> */}
           {resList.map((restaurant)=>(
            
// index.js:1 Warning: Each child in a list should have a unique "key" prop.

// Check the render method of `Main`. See https://reactjs.org/link/warning-keys for more information.
//     at Card (http://localhost:1234/index.6cc34a83.js:3028:17)
//     at Main
//     at div
//     at AppLayout
// ﻿
  //  to avoid this warning  use key in which i am giving the id as key

            <Card   resData = {restaurant} /> 
           ))}
 

          </div>
      </div>
  );
};

 
// main container the contains all the hero section 


 
// the root in which i am gonna inset all the sections of the project 
const AppLayout = () => {
    return (
      <div className="main-container">
        <Header/>
        <Main/>
      </div>
    )
}

const appRouter =  createBrowserRouter([
{
  path : "/",
  element: <AppLayout/> ,
} , 

{
  path : "/about" , 
element : <About/> ,
},
{
  path :"/contact" , 
  element :<Contact/> , 
}

]
 
)

const root = ReactDOM.createRoot(document.querySelector('.root')) ; 


root.render(<RouterProvider  router={appRouter}/>  ) ; 

 