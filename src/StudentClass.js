import React from "react";


export default class StudentClass extends React.Component
{
    render()
    {
        console.log(this.props);
        return(
            
            <div style={{backgroundColor:"pink",padding:10, margin:10}}>
            <h2>This below line is from StudentClass.js</h2>
                <h3>hello {this.props.name}</h3>
                <h4>Email id: {this.props.email}</h4>
            </div>
        )
    }
}