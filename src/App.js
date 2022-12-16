import { useState } from "react";
import "./App.css";
import React from "react";

class App extends React.Component{
  constructor()
  {
    super();

    this.state = {
      name : "Sachin Kumar",
      who: null
    }

    console.log("Contructor");
  }

  componentDidMount()
  {
    console.log("Component did mount:");
  }

  componentDidUpdate()
  {
    console.log("componentDidUpdate called:");
    // condition is necessary, otherwise it will become a infinite loop, will give errors.
    if (this.state.who == null) {
      this.setState({who:"Sachin kumar"})
    }
    

  }

  render()
  {
    console.log("Render called:");

    return(
      <div className="App">
        <h1>Component Did Mount</h1>
        <h2>My friend name is {this.state.name}</h2>
        <h3>I am {this.state.who}</h3>
        <button onClick={()=>this.setState({name:"Developer"})}>Update Name</button>
      </div>
    )
  }
}

export default App;
