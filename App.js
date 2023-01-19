import React from "react";
import ReactDOM from "react-dom/client";

// const AppLayout = () => {
//     return {
//         Header
//         - logo
//         - Nav  
    
//         Body
//         - search Bar
//         - RestaurantList
//           Restaurantcard
//           - Image
//           - Name
//           - Rating
//           -Cuisines

//        Footer
//         - Links
//         -copyrights
//     }
// }


const Title = () => {
    return (
        
            <img
                className="logo"
                alt="logo"
                src="data:image/jpeg;base64,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" />
             )}


const Header= () => {
    return (
        <div className="header">
            <Title />
            <div className="navItems">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>

            </div>
        </div>
        
    )
}

const RestaurantList= [
    {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "500769",
      "name": "Jingles",
      "uuid": "4935b434-aeb3-4007-b4ad-59093c81a7fe",
      "city": "10164",
      "area": "NSB Road",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "hu6jtfdhvfiksvzwh6zz",
      "cuisines": [
        "Italian",
        "Fast Food",
        "Chinese"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 25,
      "minDeliveryTime": 25,
      "maxDeliveryTime": 25,
      "slaString": "25 MINS",
      "lastMileTravel": 0.8999999761581421,
      "slugs": {
        "restaurant": "jain-food-products-nsb-road-nsb-road",
        "city": "raniganj"
      },
      "cityState": "10164",
      "address": "12/N S B ROAD RANIGANJ ASANSOL MUNICIPAL CORPORATION WB 713347",
      "locality": "Hatia Talab",
      "parentId": 2349,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹80 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹80 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5573691~p=1~eid=00000185-ca50-2e8b-0120-11cb009f013a",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.8 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "500769",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "lastMileTravel": 0.8999999761581421,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.0",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "447691",
      "name": "Mio Amore - The Cake Shop",
      "uuid": "727eced9-1dc5-4549-8f76-b32feb2e1b5c",
      "city": "10164",
      "area": "NSB Road",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "hbsybhe7o4j9lnm5jofb",
      "cuisines": [
        "Bakery",
        "Desserts"
      ],
      "tags": [
        
      ],
      "costForTwo": 15000,
      "costForTwoString": "₹150 FOR TWO",
      "deliveryTime": 14,
      "minDeliveryTime": 14,
      "maxDeliveryTime": 14,
      "slaString": "14 MINS",
      "lastMileTravel": 0.8999999761581421,
      "slugs": {
        "restaurant": "mio-amore-–-the-cake-shop-nsb-road-nsb-road",
        "city": "raniganj"
      },
      "cityState": "10164",
      "address": "C29 ,NSB ROAD,NEAR CITY PLAZA, RANIGANJ ,WEST BENGAL-713347",
      "locality": "NSB Road",
      "parentId": 292958,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹80 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹80 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.8 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "447691",
        "deliveryTime": 14,
        "minDeliveryTime": 14,
        "maxDeliveryTime": 14,
        "lastMileTravel": 0.8999999761581421,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.0",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "457639",
      "name": "Baskin Robbins",
      "uuid": "282c6453-46d1-497e-913e-99798ee3ae06",
      "city": "10164",
      "area": "PASCHIM BARDHAMAN",
      "totalRatingsString": "50+ ratings",
      "cloudinaryImageId": "zrveswhfi1dvo1c1sv4g",
      "cuisines": [
        "Desserts",
        "Ice Cream"
      ],
      "tags": [
        
      ],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 17,
      "minDeliveryTime": 17,
      "maxDeliveryTime": 17,
      "slaString": "17 MINS",
      "lastMileTravel": 1.399999976158142,
      "slugs": {
        "restaurant": "baskin-robbins-asansol-municipal-corporation-nsb-road",
        "city": "raniganj"
      },
      "cityState": "10164",
      "address": "S NO 1, MAA DURGA APARTMENT, N.S.B. ROAD, RANIGANJ, ASANSOL MUNICIPAL CORPORATION, PASCHIM BARDHAMAN, West Bengal-713347",
      "locality": "ASANSOL MUNICIPAL CORPORATION",
      "parentId": 5588,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹80 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹80 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "457639",
        "deliveryTime": 17,
        "minDeliveryTime": 17,
        "maxDeliveryTime": 17,
        "lastMileTravel": 1.399999976158142,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.3",
      "totalRatings": 50,
      "new": false
    },
    "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "586032",
          "name": "Delicious Momos/Joy Maa Tara Momo",
          "uuid": "44bda4bc-5ad3-49fa-960e-0748382eb69b",
          "city": "10164",
          "area": "NSB Road",
          "totalRatingsString": "20+ ratings",
          "cloudinaryImageId": "l2wiunvxsnb87e9bmxya",
          "cuisines": [
            "Chinese"
          ],
          "tags": [
            
          ],
          "costForTwo": 15000,
          "costForTwoString": "₹150 FOR TWO",
          "deliveryTime": 19,
          "minDeliveryTime": 19,
          "maxDeliveryTime": 19,
          "slaString": "19 MINS",
          "lastMileTravel": 0.8999999761581421,
          "slugs": {
            "restaurant": "delicious-momos/joy-maa-tara-momo-nsb-road-nsb-road",
            "city": "raniganj"
          },
          "cityState": "10164",
          "address": "NSB Road,Near State Bank Of India,Word No-93,Asansol Municipal Corporation,Paschim Bardhaman,West Bengal-713347",
          "locality": "NSB Road",
          "parentId": 350688,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹80 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹80 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "0.8 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "586032",
            "deliveryTime": 19,
            "minDeliveryTime": 19,
            "maxDeliveryTime": 19,
            "lastMileTravel": 0.8999999761581421,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.5",
          "totalRatings": 20,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "151538",
          "name": "Garam Masala",
          "uuid": "cfdf796b-ded1-4908-8810-06668e0b04bd",
          "city": "10164",
          "area": "Rajpara",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "jywnesmxcjlh3jwv3pip",
          "cuisines": [
            "North Indian",
            "South Indian"
          ],
          "tags": [
            
          ],
          "costForTwo": 25000,
          "costForTwoString": "₹250 FOR TWO",
          "deliveryTime": 19,
          "minDeliveryTime": 19,
          "maxDeliveryTime": 19,
          "slaString": "19 MINS",
          "lastMileTravel": 0.8999999761581421,
          "slugs": {
            "restaurant": "garam-masala-raj-para-nsb-road",
            "city": "raniganj"
          },
          "cityState": "10164",
          "address": "sport assembly rajpara raniganj",
          "locality": "raj para",
          "parentId": 408,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹80 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹80 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "0.8 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "151538",
            "deliveryTime": 19,
            "minDeliveryTime": 19,
            "maxDeliveryTime": 19,
            "lastMileTravel": 0.8999999761581421,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.9",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "287091",
          "name": "The Neelkanth Hotel",
          "uuid": "610b40e4-97d7-4315-abe8-a10022e79d55",
          "city": "10164",
          "area": "Nsb Road",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "o8a8vaufmeaka1aemdqj",
          "cuisines": [
            "North Indian",
            "Biryani",
            "Chinese",
            "Fast Food"
          ],
          "tags": [
            
          ],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 27,
          "minDeliveryTime": 27,
          "maxDeliveryTime": 27,
          "slaString": "27 MINS",
          "lastMileTravel": 1.7999999523162842,
          "slugs": {
            "restaurant": "the-neelkanth-hotel-nsb-road-nsb-road",
            "city": "raniganj"
          },
          "cityState": "10164",
          "address": "93, NSB Road, Raniganj, Dist: P Burdwan, (WB)",
          "locality": "Sishu Bagan",
          "parentId": 211832,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹80 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹80 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=5574018~p=7~eid=00000185-ca50-2e8b-0120-11cd009f0724",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "1.7 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "287091",
            "deliveryTime": 27,
            "minDeliveryTime": 27,
            "maxDeliveryTime": 27,
            "lastMileTravel": 1.7999999523162842,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "4.0",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "600790",
          "name": "Blend Of Taste-Rajji Da Dhaba",
          "uuid": "78108cd6-66d5-46c9-8eac-bb84da57d057",
          "city": "10164",
          "area": "NSB Road",
          "totalRatingsString": "Too Few Ratings",
          "cloudinaryImageId": "j6yzddmjm8lvqnyzocix",
          "cuisines": [
            "Snacks",
            "Chinese",
            "Pastas"
          ],
          "tags": [
            
          ],
          "costForTwo": 15000,
          "costForTwoString": "₹150 FOR TWO",
          "deliveryTime": 19,
          "minDeliveryTime": 19,
          "maxDeliveryTime": 19,
          "slaString": "19 MINS",
          "lastMileTravel": 0.8999999761581421,
          "slugs": {
            "restaurant": "blend-of-taste-rajji-da-dhaba-nsb-road-nsb-road",
            "city": "raniganj"
          },
          "cityState": "10164",
          "address": "p.n.malia road,raniganj gurudwara, ward no-36,asansol municipal corporation,paschim bardhaman,west bengal-713347",
          "locality": "NSB Road",
          "parentId": 358522,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹80 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹80 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "0.8 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "600790",
            "deliveryTime": 19,
            "minDeliveryTime": 19,
            "maxDeliveryTime": 19,
            "lastMileTravel": 0.8999999761581421,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "--",
          "totalRatings": 0,
          "new": false
        },
        "subtype": "basic"
      },
]



const Restaurantcard = ({ name, cuisines, cloudinaryImageId, lastMileTravelString }) => {
    return (
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
            + cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString}</h4>

        </div>
    )
}
const Body = () => {
    return (

        <div className="restaurant-List">
            {
                RestaurantList.map((restaurant) => {
                  return  <Restaurantcard {...restaurant.data}/>
                })
            }
            
        
        </div>
    )
}
const Footer = () => {
    return(
        <h1>This is my Footer</h1>
    )
}
const AppLayout = () => {
    return(<React.Fragment>
        <Header />
        <Body/>
        <Footer />
        </React.Fragment>
    )
}



const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);