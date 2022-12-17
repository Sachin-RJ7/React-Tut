
import { useState } from "react";
import "./App.css";

// controlled component

// A controlled component is a type of form element in React that is controlled by the component's state. In other words, the value of a controlled component is determined by the value of the component's state, rather than by the value of the DOM element's value attribute.

function App()
{

  const [val, setValue] = useState("Enter your name");

  
  return(
    <div className="App">
      <h1>Controlled Component</h1>
      <input type="text" value={val} onChange={(e)=>setValue(e.target.value)} />
    </div>
  )
}

export default App;
