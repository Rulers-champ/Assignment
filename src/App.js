import { useState,useEffect } from 'react';
import './App.css';
import Layout from './components/Layout';
import Input from './components/Input';



function App() {
 
  const [item,setitem]=useState({})
  const [showForm,setshowForm]=useState(true)
  

  function submit(info)
  {
    setitem(info)
    setshowForm(!showForm)
  }

  function update()
  {
    setshowForm(!showForm)
  }

  return (
    <>
      {showForm?<Input submit={submit} />:<Layout item={item} update={update}/>}  
    </>
  );
}

export default App;
