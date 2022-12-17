
import { useRef } from "react";
import "./App.css";


// Uncontrolled component

// An uncontrolled component is a form element in React that is not controlled by the component's state. In other words, the value of an uncontrolled component is determined by the DOM element's value attribute, rather than by the component's state.

function App()
{
  
  let inputRef1 = useRef(null)
  let inputRef2 = useRef(null)
  let inputRef3 = useRef(null)

  function submitForm(e)
  {
    e.preventDefault();
    console.log("input field 1",inputRef1.current.value)
    console.log("input field 2",inputRef2.current.value)
    console.log("input field 3",inputRef3.current.value)
  }

  return(
    <div className="App">

      <h1>Uncontrolled Component</h1>

      <form onSubmit={submitForm}>
        <input type="text" ref={inputRef1 } /><br /> <br />
        <input type="text" ref={inputRef2} /><br /> <br />
        <input type="text" ref={inputRef3} /><br /> <br />
        <button type="submit" >Submit</button>         
      </form>

    </div>
  )

}

export default App;
