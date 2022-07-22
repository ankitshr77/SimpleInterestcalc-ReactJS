import './App.css';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';


function App() {
  const [p, setP] = useState(0)
  const [r, setR] = useState(0)
  const [t, setT] = useState(0)
  const [si, setSi] = useState(0)

  const calculateSI = (event) =>{
    const ans = (p*r*t/100)
    setSi(ans)
  }


  return (
    <div className='wrapper'>
    <h1><u>SIMPLE INTEREST CALCULATOR</u></h1>
    <br/>
    <TextField onChange={(event)=> setP(event.target.value)} id="outlined-basic" label="Principle" variant="outlined" className='simplebox'/>
    <TextField onChange={(event)=> setR(event.target.value)} id="outlined-basic" label="Rate" variant="outlined" className='simplebox'/>
    <TextField onChange={(event)=> setT(event.target.value)} id="outlined-basic" label="Time" variant="outlined" className='simplebox'/>
    <br/>
    <button className='SIbutton' onClick={()=>calculateSI()}>Calculate Simple Interest</button>
    <br/>
    <h2>The calculated Simple Interest is: {si}</h2> 
    </div>
  );
}

export default App;
