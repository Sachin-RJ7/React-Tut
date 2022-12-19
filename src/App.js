import "./App.css";
import React, { useState } from "react"

function App()
{

  const [name, setName] = useState("")
  const [city, setCity] = useState("")

  function saveUser()
  {
    console.warn({name, city});

    const data = {name, city};  // define an object containing the name and city values

fetch("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8", {  // send a POST request to the specified URL
  method: 'POST',  // set the request method to POST
  headers: {  // set the request headers
    'Accept': 'application/json',  // accept a response in JSON format
    'Content-Type': 'application/json'  // send the request body in JSON format
  },
  body: JSON.stringify(data)  // stringify the data object and send it as the request body
}).then((result) => {  // when the request is completed, handle the result
  // console.warn(result);  // you can use this to log the result object to the console
  result.json().then((resp) => {  // parse the result body as JSON and handle the parsed data
    console.warn("resp: ", resp);  // you can use this to log the parsed data to the console
  })
});

  }

  return (
    <div className="App">
      <h1>Post API example</h1>
      <input type="text" value={name} onChange = {(e)=>setName(e.target.value)} name="name" /> <br/> <br/>
      <input type="text" value={city} onChange = {(e)=>{setCity(e.target.value)}} name="city" /> <br/> <br/>
      <button onClick={saveUser} type="submit">Save New User</button>
    </div>
  )
}

export default App