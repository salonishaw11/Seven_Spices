export function filterdata(restaurants, searchText){
    const filterData = restaurants.filter((restaurant) => {
        return restaurant.data.name?.toLowerCase()?.includes(searchText.toLowerCase())      
    }       
    )
    return filterData;  
}