import { useRef } from "react";
import "./App.css";
import Child from "./Child";

function App()
{

  let inputRef = useRef(null)

  function handleInput()
  {
    console.log("function Call");
    inputRef.current.value = "1000"
    inputRef.current.focus()
    inputRef.current.style.display="none"
  }

  return(
    <div className="App">
      {/* <h1>Use Ref in react</h1> */}
      <Child ref={inputRef} />
      <button onClick={handleInput}>Handle Input</button>
    </div>
  )
}

export default App;
