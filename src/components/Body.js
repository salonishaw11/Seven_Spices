import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { filterdata } from "../utils/helper";
import useOnline from "../utils/useOnline";


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
    const isOnline = useOnline();
    if (!isOnline) {
        return <h1>Please Check your Internet Connection</h1>
    }


    return filteredRestaurants.length===0 ? (<Shimmer/>):
        (<>
        <div className="p-5 m-2 bg-yellow-100">
                <input
                    type="text"
                    placeholder="search"
                    className="p-2 m-2 focus:bg-pink-100"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                /> 
                <button className="p-2 m-2 bg-green-400 hover:bg-gray-400 rounded-md" onClick={() => {
                    
                    const data = filterdata(allRestaurants, searchText)
                    return setFilteredRestaurants(data)
                }}>Search</button>
        </div>
        <div className="flex flex-wrap">
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