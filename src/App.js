import "./App.css";
import React, { useEffect, useState } from "react";

function App()
{

  const[count, setCount] = useState(0)

  useEffect(()=>{
    console.log("UseEffect called:");
  })
  

  return (
    <div className="App">
      <h1>UseEffect in react</h1>
      <h3>Count: {count}</h3>
      <button onClick={()=>setCount(count+1)}>Update Count</button>


    </div>
  )

}

export default App;
