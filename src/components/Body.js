import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function filterdata(restaurants, searchText){
    const filterData = restaurants.filter((restaurant) => {
        return restaurant.data.name?.toLowerCase()?.includes(searchText.toLowerCase())      
    }       
    )
    return filterData;  
}
const Body = () => {
    const [searchText, setSearchText] = useState("")
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [allRestaurants, setAllRestaurants] = useState([])
    
    useEffect(() => {
         getRestaurants();
    }, [])
    
    async function getRestaurants() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.6143217&lng=87.118782&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json()
        console.log(json) 
        setAllRestaurants(json?.data?.cards[0]?.data?.data?.cards)
        setFilteredRestaurants(json?.data?.cards[0]?.data?.data?.cards)
        
    }
    return filteredRestaurants.length===0 ? (<Shimmer/>):
        (<>
        <div className="search-container">
                <input
                    type="text"
                    placeholder="search"
                    className="search-input"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                /> 
                <button className="search-btn" onClick={() => {
                    
                    const data = filterdata(allRestaurants, searchText)
                    return setFilteredRestaurants(data)
                }}>Search</button>
        </div>
        <div className="restaurant-List">
            {
                filteredRestaurants?.map((restaurant) => {
                    return <Link to={"/restaurant/" + restaurant.data.id}><RestaurantCard {...restaurant.data} key={restaurant.data.id} /></Link>
                })
            }
            
        
            </div>
            </>
    )
}
export default Body;