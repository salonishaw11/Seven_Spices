import React,{createContext} from 'react'


const UserContext = createContext({
    user: {
        name: "Saloni",
        email: "saloni@gmail.com",
    }
})

export default UserContext