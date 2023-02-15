import React from "react";
import { IMG_CON_URL } from "../constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
const RestaurantCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
}) => {
    const { user }= useContext(UserContext)
    return (
        <div className="w-56 p-2 m-2 shadow-lg bg-orange-300">
            <img src={IMG_CON_URL
            + cloudinaryImageId} />
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString}</h4>
            <h3>{user.name}</h3>
            <h3>{user.email}</h3>

        </div>
    )
}

export default RestaurantCard;