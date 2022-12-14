import { useState } from "react";
import "./App.css";
import Child from "./Child";

function App() {
  function getData ()
  {
    alert('User From App');
  }
     
  return (
    <div className="App">
      <h1>Passing function as props</h1>
      <Child data={getData} />
    </div>
  );
}

export default App;
