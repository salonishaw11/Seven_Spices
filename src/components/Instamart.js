import React, { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
    
    return(
    <div className="border border-black p-2 m-2">
            <h3 className="font-bold text-xl" >{title}</h3>
            {isVisible ? <button className=" cursor-auto underline" onClick={() => { setIsVisible(false) }}>Hide</button> :
            <button className=" cursor-auto underline"onClick={() => { setIsVisible(true) }}>Show</button>}
            
            {isVisible && <p>{description}</p>}
        </div>
    )
}
const InstaMart = () => {
    const [visibleSection, setVisibleSection] = useState("about")
    return (
        <div>
            <Section title={"About Instamart"} description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            }
                isVisible={visibleSection === "about"}
                setIsVisible={(display) => {
                    if (display) {
                        setVisibleSection("about")
                    }
                    else {
                        setVisibleSection("")
                    }
                }
                } />
            <Section title={"Team Instamart"} description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            }
                isVisible={visibleSection === "team"}
                setIsVisible={(display) => {
                    if (display) {
                        setVisibleSection("team")
                    }
                    else {
                        setVisibleSection("")
                    }
                }} />
            <Section title={"Careers"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            }
                isVisible={visibleSection === "career"}
                setIsVisible={(display) => {
                    if (display) {
                        setVisibleSection("career")
                    }
                    else {
                        setVisibleSection("")
                    }
                }}
                    />
            
        </div>
    )
}
export default InstaMart;
