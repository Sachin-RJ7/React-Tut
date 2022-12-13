
import './App.css';
import { useState } from 'react';
import User from './User';
import Message from './Message'

function App() {
  const [data,setDate] = useState(0); 
  function updateData(){
    setDate(data + 1);
    // alert("Congratulations");
  }
  console.log("_____________");
  return (
    <div className="App">
      <h1>Hello</h1>
      <User />
      <Message />
      <h4>{data}</h4>
      <button onClick={updateData}>Update data</button>
    </div>
  );
}






export default App;
