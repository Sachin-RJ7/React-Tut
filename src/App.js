import { useState } from "react";
import "./App.css";
import Form from "./Form";

function App() {
  const[status, setStatus] = useState(true);
     
  return (
    <div className="App">
      <h1>Let's see the magic!</h1>
      {
        status?<h3 style={{color:"blue"}}>Hii, My self React Js</h3>:null
      }
      {/* <button onClick={()=>setStatus(false)}>Hide</button> */}
      {/* <button onClick={()=>setStatus(true)}>Show</button> */}
      <button onClick={()=>setStatus(!status)}>Toggle</button>
      <Form />
    </div>
  );
}

export default App;
