import { useState } from "react";
import "./App.css";
import User from "./User";

function App() {
  
  const [name, setName] = useState("Dev");
     
  return (
    <div className="App">
      <h1>Render Method</h1>
      <User name={name} />
      <button onClick={()=>setName("Sachin kumar")}>Update Name</button>
    </div>
  );
}

export default App;
