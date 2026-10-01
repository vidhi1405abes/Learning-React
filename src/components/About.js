import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component{
    constructor(){
        console.log("Parent Const");
        
        super()
    }
    componentDidMount(){
        console.log("Parent CompDidMount");
        
    }
    render(){
        console.log("Parent Render");
        
        return (
        <div >
            <h1>About</h1>
         
            <UserClass name={"First"}/>
            <UserClass name={"Second"}/>
            <UserClass name={"Third"}/>
           
        </div>
    )
    }
}
export default About;