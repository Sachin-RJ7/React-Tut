import "./App.css";
import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import User from "./User";

function App() {
  let users = [
    { id: 1, name: "Sachin", email: "sachin@gmail.com" },
    { id: 2, name: "Sunny", email: "sunny@gmail.com" },
    { id: 3, name: "Rahul", email: "rahul@gmail.com" },
    { id: 4, name: "Abhi", email: "abhi@gmail.com" },
    { id: 5, name: "Nanu", email: "nanu@gmail.com" }
    // we can add as many as want...
  ];

  return (
    <div className="App">
      <Router>
        <h1>Dynamic Routing</h1>
        {
          users.map((item)=>
            <div key={item.id} ><Link to={"/users/"+item.id+"/"+item.name}><h3>{item.name}</h3></Link></div>
          )
        }

        <Routes>
          <Route path="/users/:id/:name"  element={<User />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
