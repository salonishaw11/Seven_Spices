import React,{useState,useEffect} from "react";
import { FETCH_MENU_URL } from "../constants";
const useRestaurant = (id) => {
    const [resDetail, setResDetail] = useState(null);
    useEffect(
        () => {
           getRestaurantInfo() 
        },[]
    )
    async function getRestaurantInfo() {
        const data = await fetch(
            FETCH_MENU_URL+id
        )
        const json = await data.json()
        console.log(json.data)
        setResDetail(json.data)
    }
    return resDetail;
}
export default useRestaurant;