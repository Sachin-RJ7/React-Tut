import React, { useState } from "react";
// this is form section

function Form() {

    const [name, setName] = useState("");
    const [tnc, setTnc] = useState(false);
    const [interest, setInterest] = useState("");

    function getFormData(e){
        console.warn(name, tnc, interest);
        e.preventDefault()
    }
  return (
    <div>
      <h1>Handle Form in React !</h1>
      <form onSubmit={getFormData}>
        <input type="text" placeholder="Your name" onChange={(e)=>{setName(e.target.value)}} /> <br /><br />
        <select onChange={(e)=>setInterest(e.target.value)}>
          <option>Select Options</option>
          <option>Apple</option>
          <option>Banana</option>
          <option>Mango</option>
        </select> <br /> <br />
        <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /> <span>Accept terms & conditions</span> <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form;
