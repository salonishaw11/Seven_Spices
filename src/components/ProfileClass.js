import React from "react";
import { json } from "react-router-dom";
 
class ProfileClass extends React.Component{
    constructor(props) {
        super(props);
        console.log("Child - Constructor")
        this.state = {
            count: 0,
            name: "Dummy Name",
            avatar_url:"Dummy avatar"
        }
    }
    async componentDidMount() {
        console.log("child- ComponentDidMount")
        const data = await fetch("https://api.github.com/users/salonishaw11")
        const json = await data.json()
        this.setState({
            userInfo: json,
        });
    }
    render() {
        console.log("Child -render")
        return (
            <div>
            <div>
                <h1>Class based Component</h1> 
                    <h2>{this.state?.userInfo?.name}</h2>
                    <img src={this.state?.userInfo?.avatar_url}/>
                    <h3>Count: {this.state.count}</h3>
            </div>
                <button onClick={() => {
                    this.setState({count:1})
                }}>
                    SetCount
                </button>
            </div>
        )      
    }
}
export default ProfileClass;