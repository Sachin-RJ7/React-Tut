import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./components/home/Home";
import About from "./components/about/About";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" exact="true"  element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </div>
  );
}

export default App;
