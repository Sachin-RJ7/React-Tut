
import './App.css';
import React, { useState } from 'react';
// import User from './User';
// import Message from './Message'
// import Student from './Student'
import StudentClass from './StudentClass';

class App extends React.Component
{
  constructor(){
    super();
    this.state = {
      name : "Sachin"
    }
  }
  
   render(){
    return (
      <div className="App">
        <h1>Hello</h1>
        {/* <User /> */}
        {/* <Message /> */}
        {/* <h1>Props in react </h1> */}
        {/* <Student name = "Dev" /> */}
        <StudentClass name = {this.state.name} email = "developer@gmail.com" />
        <button onClick={()=>{this.setState({name:"Dev"})}}>Update name</button>
      </div>
    );
   }
  
}


export default App;
