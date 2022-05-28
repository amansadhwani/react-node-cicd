import './App.css';
import React,{useEffect, useState} from 'react';
import axios from 'axios'
function App() {
  const [name,setName]=useState('');
  const getName = async () =>{
    const response = await axios.get("/name");
    setName(response.data)
  }
  useEffect(()=>{
    getName()
  },[])
  return (
    <div className="App">
     <h1>Hello Welcome to CICD Pipeline</h1> 
     <h3>My Name is {name}</h3> 
    </div>
  );
}

export default App;
