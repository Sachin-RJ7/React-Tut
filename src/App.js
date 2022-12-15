import { useState } from "react";
import "./App.css";
import React from "react";

class App extends React.Component{
  constructor()
  {
    super();

    this.state = {
      name : "Sachin Kumar"
    }

    console.log("Contructor");
  }

  componentDidMount()
  {
    console.log("Component did mount:");
  }

  render()
  {
    console.log("Render called:");

    return(
      <div className="App">
        <h1>Component Did Mount</h1>
        <h2>My friend name is {this.state.name}</h2>
        <button onClick={()=>this.setState({name:"Developer"})}>Update Name</button>
      </div>
    )
  }
}

export default App;
