 

// for more than one card 

import React from "react";
import ReactDOM  from "react-dom/client";
import { useState } from "react";

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
    const { name , cuisines , avgRating , costForTwo} = resData?.info ;
    return (
        <div className="card">
            <div className="cusine-box">
              {/* to change the images of the card we have to use the cloudinaryImageId which get append after cdn of image  */}
              {/* just remove the id after the in the path of the image  and add the resData.<hiarchy>.cloudinaryImageId */}
                <img className="cusines" src={ "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId} alt="Cuisine" />
            </div>
            <ul>
                <li><h1 className="res_name">{resData.info.name}</h1></li>
                <li>{cuisines.join(", ") }</li>
                <li>{ avgRating}</li>
                <li>{ costForTwo}</li>
            </ul>
        </div>
    );
}; 
const Main = () => {

    // state variable
    // first argument is the initial one and second one is the modified one 
    let [resList, setresList] = useState(  [{
        "info": {
          "id": "359354",
          "name": "Starbucks Coffee",
          "cloudinaryImageId": "640f42a499efa27f0c7d75f5bfe6439e",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Beverages",
            "Cafe",
            "Snacks",
            "Desserts",
            "Bakery",
            "Ice Cream"
          ],
          "avgRating": 3.4,
           
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹190"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/starbucks-coffee-z-square-mall-mall-road-kanpur-359354",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "161455",
          "name": "Burger King",
          "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
          "locality": "Z Square Mall",
          "areaName": "Downtown",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Burgers",
            "American"
          ],
          "avgRating": 4.3,
          "parentId": "166",
          "avgRatingString": "4.3",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 33,
            "lastMileTravel": 1.7,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "1.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-03-17 23:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/burger-king-z-square-mall-downtown-kanpur-161455",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "75044",
          "name": "KFC",
          "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
          "locality": "Z Square Mall",
          "areaName": "Mall Road",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Burgers",
            "Biryani",
            "American",
            "Snacks",
            "Fast Food"
          ],
          "avgRating": 4.4,
          "parentId": "547",
          "avgRatingString": "4.4",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 31,
            "lastMileTravel": 1.4,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "1.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-03-17 23:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/kfc-z-square-mall-mall-road-kanpur-75044",
          "type": "WEBLINK"
        }
      },] ) ; 

  return (
      <div className="main">

            <button className="filter" onClick={()=>{
              console.log("button clicked") ;
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

            <Card  key ={restaurant.info.id} resData = {restaurant} /> 
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
const root = ReactDOM.createRoot(document.querySelector('.root')) ; 


root.render(<AppLayout/>) ; 

 