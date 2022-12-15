
import React from "react";

class User extends React.Component{
    constructor(){
        super();
        this.state = {
            email : "dev@testgmai.com"
        }
    }
    render()
    {
        console.log("Render method:", this.state.email)
        return (
            <div>
                <h1>User Component </h1>
                <h2>My self {this.props.name}</h2>
                <h3>My email id: {this.state.email}</h3>
                <button onClick={()=>this.setState({email:"sachin@test@gmail.com"})}>Update Email</button>
            </div>
        )
    }
}

export default User;