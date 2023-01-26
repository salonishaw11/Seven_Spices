import React from "react"
import { Outlet } from "react-router-dom"
import Profile from "./Profile"
import ProfileClass from "./ProfileClass"
// const About = () => {
//     return (
//         <div>
//         <h1>About page</h1>
//         <Profile name={"Saloni"} />
//         <ProfileClass surName={"Shaw"} />
//         </div>
//     )
// }
// export default About

class About extends React.Component{
  constructor(props) {
    super(props);
    console.log("parent - Constructor")
    this.state = {
      count: 0,
      name: "",
      location: "",
      img:""
  }
  }
  async componentDidMount() {
    console.log("parent - ComponentDidMount")
    const data = await fetch("https://api.github.com/users/salonishaw11")
        const json = await data.json()
        this.setState({
            name: json.name,
        })

  }
  render() {
    console.log("Parent - Render")
    return (
      <div>
        <h1>About page</h1>
        <ProfileClass surName={"Mohaptra"} />
         </div>
    )
  }
}
export default About; 