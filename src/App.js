import React, { Children, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import ProfileClass from "./components/ProfileClass";
import InstaMart from "./components/Instamart";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";




const AppLayout = () => {
    const [user, setUser] = useState({
        name: "Saloni Shaw",
        email: "salonishaw1197@gmail.com"
    })
    return (
        <Provider store={store}>
        <UserContext.Provider value={{
        user: user,
        setUser:setUser
    }}>
        <Header />
        <Outlet />
        <Footer />
            </UserContext.Provider>
            </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout /> ,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body
                    user = {{ name: "saloni", age: 25 }}
                     />
            },
            {
                path: "/about",
                element: <About />, 
                children: [
                    {
                        path: "profile",
                        element: <ProfileClass />
                    }
                ]
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu/>
            },
            {
                path: "/instamart",
                element: <InstaMart/>
            },
            {
                path: "/cart",
                element: <Cart/>
            },
        ]
    } ,
     
])


const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);