import React from "react";
const Shimmer = () => {
    return <div className="restaurant-List">
        {Array(18).fill("").map((e, index) => <div key={index} className="shimmer-card"></div>)}  
    </div>
}
export default Shimmer;