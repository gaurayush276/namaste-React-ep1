 
    import React from "react";
import ReactDOM  from "react-dom/client";


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
const Card = (props) =>{

    console.log(props) ;
    return (
        <div className="card">
            <div className="cusine-box" >
                <img className="cusines" src="https://terrigalchargrill.com/cdn/shop/files/TCC_9.png?v=1691884438"></img>
            </div>
            <ul>
                <li>
                   <h1 className="res_name">{props.res_name}</h1>
                </li>
                <li>
                    {props.res_cusines}
                </li>
                <li>
                    4 stars
                </li>
                <li>
                   34 minutes
                </li>
                
            </ul>
        </div>
    )
}
 
// main container the contains all the hero section 
const Main = () =>{
    return (
       <div className="main">
            <div className="search">Serach</div>
            <div className="res-container">
                {/* card the have to be inserted in the res -container  */}

                {/* we gonna pass props { res-name , res-cusines } to the card as an argument */}
             <Card  res_name="Burger King" 
                   res_cusines = 'burger , frech fries  etc.'
                />
             <Card  res_name="Mc-donalds"
                     res_cusines = "burger , french fries , donuts etc"
             />
             <Card/>
             <Card/>
             <Card/>
             <Card/>
             <Card/>
             <Card/>
            </div>

       </div>
    )
}
// the root in which i am gonna inset all the sections of the project 
const AppLayout = () => {
    return (
      <div className="main-container">
        <Header/>
        <Main/>
      </div>
    )
}
const root = ReactDOM.createRoot(document.querySelector('.root')) ; 


root.render(<AppLayout/>) ; 

 