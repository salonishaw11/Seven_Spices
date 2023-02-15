import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { filterdata } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useContext } from "react";


const Body = (props) => {
    const [searchText, setSearchText] = useState("")
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [allRestaurants, setAllRestaurants] = useState([])
   
    const {user, setUser}= useContext(UserContext)
    
    useEffect(() => {
         getRestaurants();
    }, [])
    
    async function getRestaurants() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.6143217&lng=87.118782&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json()
        console.log(json) 
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        
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
                }}>
                    Search
                </button>
                <input value={user.name} onChange={(e) => {
                    setUser({
                        name: e.target.value,
                        email: "newemail.gmail.com"
                    })
                }}></input>

        </div>
        <div className="flex flex-wrap">
            {
                filteredRestaurants?.map((restaurant) => {
                    return <Link to=
                        {"/restaurant/" + restaurant.data.id}>
                        <RestaurantCard {...restaurant.data} key={restaurant.data.id} user={props.user} />
                    </Link>
                })
            }
            
        
            </div>
            </>
    )
}
export default Body;