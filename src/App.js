
import './App.css';
import { useState } from 'react';
import User from './User';
import Message from './Message'
import Student from './Student'

function App() {
  const [name, setname] = useState("Sachin");
   
  return (
    <div className="App">
      <h1>Hello</h1>
      <User />
      <Message />
      <h1>Props in react </h1>
      <Student name = { name} />
      <button onClick={()=>{setname("Dev")}}>Update Your Name</button>
      
    </div>
  );
}






export default App;
