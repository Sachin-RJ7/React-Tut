import { useState } from "react";
import "./App.css";
import React from "react";

class App extends React.Component{
  constructor()
  {
    super();

    this.state = {
      count: 0
    }

    console.log("Contructor");
  }

  // shouldComponentUpdate
  shouldComponentUpdate()
  {
    // Bydefault it remains false and prevents updates in a component
    console.log("should Component Update:",this.state.count);
    if (this.state.count >= 3 && this.state.count <=7) {
      return true;
    }
    return false;
  }

  render()
  {
    console.log("Render called:");

    return(
      <div className="App">
        <h1>Should Component Update</h1>
        <h3>Count: {this.state.count}</h3>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Update Counter</button>
      </div>
    )
  }
}

export default App;
