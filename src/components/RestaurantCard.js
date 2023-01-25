import React from "react";
import { IMG_CON_URL } from "../constants";
const RestaurantCard = ({ name, cuisines, cloudinaryImageId, lastMileTravelString }) => {
    return (
        <div className="card">
            <img src={IMG_CON_URL
            + cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines}</h3>
            <h4>{lastMileTravelString}</h4>

        </div>
    )
}

export default RestaurantCard;