import React, { useState } from 'react';
import './App.css';

function App() {
  const [luku, setLuku] = useState({ekaluku: '', tokaluku: '', result: ''});
  const [result, setResult] = useState([]);

  const inputChanged = (event) => {
    setLuku({...luku, [event.target.name]: event.target.value});
  }

  const addLuku = () => { 
    console.log({...luku, result: Number(luku.ekaluku) + Number(luku.tokaluku)})
    setResult(Number(luku.ekaluku) + Number(luku.tokaluku));
  }  

  const minusLuku = () => { 
    console.log({...luku, result: Number(luku.ekaluku) - Number(luku.tokaluku)})
    setResult(Number(luku.ekaluku) - Number(luku.tokaluku));
  } 

return (
  <div className="App">
    Result = {result}<br/>
      <input placeholder="First number" name="ekaluku" value={luku.ekaluku} type="number" onChange={inputChanged} />
      <input placeholder="Second number" name="tokaluku" value={luku.tokaluku} type="number" onChange={inputChanged} />
      <button onClick={addLuku}>+</button>
      <button onClick={minusLuku}>-</button>
      <p>Here is a calculator, you're welcome.</p>
  </div>
);
}

export default App;