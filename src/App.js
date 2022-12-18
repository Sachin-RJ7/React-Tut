
import "./App.css";
import React from "react";
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'


function App()
{
  
  return (
    <div className="App">

      <Router>

        <Link to="/home"  > Home page  </Link>
        <Link to="/about" > About page </Link>

        <Routes>
         <Route path="/home" element={<Home />}/>
         <Route path="/about" element={<About />}/>
        </Routes>
        
      </Router>
      
    </div>
  )

}


function Home()
{
  return(
    <div>
      <h1>Home page</h1>
      <p>This is home page</p>
    </div>
  )
}

function About()
{
  return(
    <div>
      <h1>About page</h1>
      <p>This is about page</p>
    </div>
  )
}


export default App;
