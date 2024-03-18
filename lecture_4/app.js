 

// i made  that one card here  and added the image in a manner " cdn link + address of the perticular image"
//  gave the props of the card in resObj 


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
const Card = ({ resData }) => {
    return (
        <div className="card">
            <div className="cusine-box">
              {/* to change the images of the card we have to use the cloudinaryImageId which get append after cdn of image  */}
              {/* just remove the id after the in the path of the image  and add the resData.<hiarchy>.cloudinaryImageId */}
                <img className="cusines" src={ "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId} alt="Cuisine" />
            </div>
            <ul>
                <li><h1 className="res_name">{resData.info.name}</h1></li>
                <li>{resData.info.cuisines.join(", ") }</li>
                <li>{resData.info.avgRating}</li>
                <li>{resData.info.costForTwo}</li>
            </ul>
        </div>
    );
};
const resObj = {
  "info": {
    "id": "359354",
    "name": "Starbucks Coffee",
    "cloudinaryImageId": "640f42a499efa27f0c7d75f5bfe6439e",
    "locality": "Z Square Mall",
    "areaName": "Mall Road",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Beverages",
      "Cafe",
      "Snacks",
      "Desserts",
      "Bakery",
      "Ice Cream"
    ],
    "avgRating": 4.2,
    "parentId": "195515",
    "avgRatingString": "4.2",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 31,
      "lastMileTravel": 1.7,
      "serviceability": "SERVICEABLE",
      "slaString": "30-35 mins",
      "lastMileTravelString": "1.7 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-03-17 22:30:00",
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
};

const Main = () => {

  return (
      <div className="main">
          <div className="search">Search</div>
          <div className="res-container">
              <Card resData={resObj} />
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

 