import "./App.css";
import Child from "./Child";

function App()
{


  function parentAlert(name)
  {
    alert(name)
  }

  return (
    <div className="App">
      <Child alert={parentAlert} />
    </div>
  )

}

export default App;
