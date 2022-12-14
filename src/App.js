import { useState } from "react";
import "./App.css";

function App() {
  const [data, setdata] = useState("Sunny");
  const [print, setPrint] = useState(false);

  function getData(val) {
    console.log(val.target.value);
    setdata(val.target.value);
    setPrint(false)
  }

  return (
    <div className="App">
      {
        print?
        <h1>{data}</h1>
        :null
      }
      <input type="text" onChange={getData} />
      <button onClick={()=>setPrint(true)}>Print name</button>
    </div>
  );
}

export default App;
