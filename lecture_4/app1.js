 

// for more than one card 

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
let resList =   [
    {
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
    },
    {
      "info": {
        "id": "253770",
        "name": "McDonald's",
        "cloudinaryImageId": "535fc9f9c135f7982317bbb6a64a1ffc",
        "locality": "Z Square Mall",
        "areaName": "Mall Road",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "American"
        ],
        "avgRating": 4.3,
        "parentId": "630",
        "avgRatingString": "4.3",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 1.4,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "1.4 km",
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
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
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
        "link": "https://www.swiggy.com/restaurants/mcdonalds-z-square-mall-mall-road-kanpur-253770",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "376847",
        "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
        "cloudinaryImageId": "mnshxflev8p10ca6tdw3",
        "locality": "Topkhana Bazar",
        "areaName": "Kanpur Cantt",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Desserts",
          "Ice Cream",
          "Ice Cream Cakes"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "582",
        "avgRatingString": "4.4",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 1,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "1.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-03-17 21:00:00",
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
        "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-topkhana-bazar-kanpur-cantt-kanpur-376847",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "86194",
        "name": "Wow! Momo",
        "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
        "locality": "Z Square Mall",
        "areaName": "Mall Road",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Tibetan",
          "Healthy Food",
          "Asian",
          "Chinese",
          "Snacks",
          "Continental",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "1776",
        "avgRatingString": "4.3",
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
        "link": "https://www.swiggy.com/restaurants/wow-momo-z-square-mall-mall-road-kanpur-86194",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "361081",
        "name": "Faasos - Wraps, Rolls & Shawarma",
        "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
        "locality": "Permat",
        "areaName": "Harsh Nagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Kebabs",
          "Fast Food",
          "Snacks",
          "American",
          "Healthy Food",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.4,
        "parentId": "21809",
        "avgRatingString": "4.4",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 35,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-03-17 23:59:00",
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
        "link": "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-permat-harsh-nagar-kanpur-361081",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "361085",
        "name": "Sweet Truth - Cake and Desserts",
        "cloudinaryImageId": "81cf6bfe2760a45a0caf2e28716ca4d7",
        "locality": "Permat",
        "areaName": "Harsh Nagar",
        "costForTwo": "₹450 for two",
        "cuisines": [
          "Snacks",
          "Bakery",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.4,
        "parentId": "4444",
        "avgRatingString": "4.4",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-03-17 23:59:00",
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
        "link": "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-permat-harsh-nagar-kanpur-361085",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "361087",
        "name": "The Good Bowl",
        "cloudinaryImageId": "6e04be27387483a7c00444f8e8241108",
        "locality": "Permat",
        "areaName": "Harsh Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Pastas",
          "Punjabi",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.4,
        "parentId": "7918",
        "avgRatingString": "4.4",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-03-17 23:59:00",
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
        "link": "https://www.swiggy.com/restaurants/the-good-bowl-permat-harsh-nagar-kanpur-361087",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "316297",
        "name": "NIC Ice Creams",
        "cloudinaryImageId": "85825a6d74b1059a63a9b688de9f67ce",
        "locality": "R K Nagar",
        "areaName": "Darshan Purwa",
        "costForTwo": "₹120 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts"
        ],
        "avgRating": 4.7,
        "veg": true,
        "parentId": "6249",
        "avgRatingString": "4.7",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 3.8,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "3.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-03-18 00:00:00",
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
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
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
        "link": "https://www.swiggy.com/restaurants/nic-ice-creams-r-k-nagar-darshan-purwa-kanpur-316297",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "136124",
        "name": "Cafe Coffee Day",
        "cloudinaryImageId": "b70c7d23d197251b7b315b7e4d8173ae",
        "locality": "Civil Lines",
        "areaName": "Mall Road",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Beverages",
          "Cafe",
          "Snacks",
          "Desserts",
          "Burgers",
          "Ice Cream",
          "Bakery",
          "Fast Food"
        ],
        "avgRating": 4.4,
        "parentId": "1",
        "avgRatingString": "4.4",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 2.4,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "2.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-03-18 00:00:00",
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
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
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
        "link": "https://www.swiggy.com/restaurants/cafe-coffee-day-civil-lines-mall-road-kanpur-136124",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "340465",
        "name": "La Pino'z Pizza",
        "cloudinaryImageId": "m1y45zbvi4uk1bz4cymd",
        "locality": "Kamal Chauraha",
        "areaName": "Swaroop Nagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Pizzas",
          "Pastas",
          "Italian",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.1,
        "parentId": "4961",
        "avgRatingString": "4.1",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 4.1,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-03-18 02:00:00",
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
        "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-kamal-chauraha-swaroop-nagar-kanpur-340465",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "81589",
        "name": "Pizza Hut",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "locality": "Z Square Mall",
        "areaName": "Mall Road",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 4.1,
        "parentId": "721",
        "avgRatingString": "4.1",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 42,
          "lastMileTravel": 1.7,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
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
          "header": "ITEMS",
          "subHeader": "AT ₹179"
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
        "link": "https://www.swiggy.com/restaurants/pizza-hut-z-square-mall-mall-road-kanpur-81589",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "361082",
        "name": "Behrouz Biryani",
        "cloudinaryImageId": "1a8dfa8b2a73ddf7c6193465ab24c898",
        "locality": "Permat",
        "areaName": "Harsh Nagar",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Kebabs",
          "Mughlai",
          "Beverages",
          "Desserts"
        ],
        "avgRating": 4.5,
        "parentId": "1803",
        "avgRatingString": "4.5",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-03-17 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
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
        "link": "https://www.swiggy.com/restaurants/behrouz-biryani-permat-harsh-nagar-kanpur-361082",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "361086",
        "name": "LunchBox - Meals and Thalis",
        "cloudinaryImageId": "a7bvtldxwl2wmvpbd8wt",
        "locality": "Permat",
        "areaName": "Harsh Nagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Punjabi",
          "Healthy Food",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.4,
        "parentId": "4925",
        "avgRatingString": "4.4",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 35,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-03-17 23:59:00",
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
          "subHeader": "AT ₹159"
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
        "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-permat-harsh-nagar-kanpur-361086",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "159132",
        "name": "Rominic Pizza",
        "cloudinaryImageId": "ww1vrk2bhfauqarqszbt",
        "locality": "Gp Road",
        "areaName": "Ashok Nagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Fast Food",
          "Snacks"
        ],
        "avgRating": 3.8,
        "veg": true,
        "parentId": "16498",
        "avgRatingString": "3.8",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 2.3,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "2.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-03-18 01:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120",
          "discountTag": "POCKET HERO"
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
        "link": "https://www.swiggy.com/restaurants/rominic-pizza-gp-road-ashok-nagar-kanpur-159132",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "301698",
        "name": "Barbeque Nation",
        "cloudinaryImageId": "dpe0p9yyhxlsu6hapf6q",
        "locality": "Z Square Mall",
        "areaName": "Mall Road",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "North Indian",
          "Barbecue",
          "Biryani",
          "Kebabs",
          "Mughlai",
          "Desserts"
        ],
        "avgRating": 4,
        "parentId": "2438",
        "avgRatingString": "4.0",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 1.4,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "1.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-03-17 23:30:00",
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
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
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
        "link": "https://www.swiggy.com/restaurants/barbeque-nation-z-square-mall-mall-road-kanpur-301698",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "216065",
        "name": "Mithas",
        "cloudinaryImageId": "145a416f8986401def8fa948191a3097",
        "locality": "Arya Nagar",
        "areaName": "Swaroop Nagar",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Sweets",
          "North Indian",
          "Snacks",
          "Chaat",
          "South Indian",
          "Beverages"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "7558",
        "avgRatingString": "4.6",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 3.7,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "3.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-03-17 22:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
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
        "link": "https://www.swiggy.com/restaurants/mithas-arya-nagar-swaroop-nagar-kanpur-216065",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "538510",
        "name": "The Brooklyn Creamery - Healthy Ice Cream",
        "cloudinaryImageId": "b1b35780a9b1dfeb26d680506d494eaa",
        "locality": "Arya Nagar",
        "areaName": "Harsh Nagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Desserts",
          "Ice Cream",
          "Healthy Food"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "236673",
        "avgRatingString": "4.4",
        "totalRatingsString": "50+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-03-17 23:59:00",
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
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
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
        "link": "https://www.swiggy.com/restaurants/the-brooklyn-creamery-healthy-ice-cream-arya-nagar-harsh-nagar-kanpur-538510",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "257141",
        "name": "Baskin Robbins - Ice Cream Desserts",
        "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
        "locality": "Arya Nagar",
        "areaName": "Swaroop Nagar",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Desserts",
          "Ice Cream"
        ],
        "avgRating": 4.2,
        "veg": true,
        "parentId": "5588",
        "avgRatingString": "4.2",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 4.5,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "4.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-03-18 03:00:00",
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
        "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-arya-nagar-swaroop-nagar-kanpur-257141",
        "type": "WEBLINK"
      }
    }
]  ; 
const Main = () => {


  return (
      <div className="main">

            <button className="filter" onClick={()=>{
              console.log("button clicked") ;
              resList = resList.filter((traverse)=>traverse.info.avgRating>4)
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

 