import React from "react";
import  ReactDOM from "react-dom/client";
const message = (
    <h1 id="2" key="course2">
        Namaste React
    </h1>)
const HeaderComponent = () => {
    return (
        <div>
        {message}
        <h1>Hello</h1>
        <h2>This is h2 tag</h2>
    </div >
    )
}    

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);