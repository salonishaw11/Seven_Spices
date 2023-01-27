import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CON_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    // const [resDetail, setResDetail] = useState(null);
    const { id } = useParams();
    const resDetail =useRestaurant(id)

    // useEffect(
    //     () => {
    //        getRestaurantInfo() 
    //     },[]
    // )
    // async function getRestaurantInfo() {
    //     const data = await fetch(
    //         "https://www.swiggy.com/dapi/menu/v4/full?lat=23.6143217&lng=87.118782&menuId="+id
    //     )
    //     const json = await data.json()
    //     console.log(json.data)
    //     setResDetail(json.data)
    // }
    
    return !resDetail? (<Shimmer/>) :(
        <div>
            <h1>
                Restaurant id:{id}
            </h1>
            <h2>{resDetail.name}</h2>
            <img src={IMG_CON_URL + resDetail.cloudinaryImageId} />
            <h3>{resDetail.area}</h3>
            <h3>{resDetail.city}</h3>
            <div>
                <h1>Menu</h1>
                <ul>
                    {Object.values(resDetail?.menu?.items).map((item) => <li key={item.id}>{item.name}</li>)}
                    </ul>
            </div>
         </div>
     )
}
export default RestaurantMenu;