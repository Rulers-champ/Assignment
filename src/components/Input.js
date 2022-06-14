import React, { useState } from 'react'

export default function Input(props) {
 
  const [info,setinfo]=useState({name:"",age:"",gender:"",date:"",notes:"",medicine:""});
  
  console.log(info);


  function handleChange(e)
  {
    const {name,value}=e.target;
    
    setinfo(prev=>{
        return {...prev,[name]:value}
    })

   // console.log(name+" "+value);

  }

  function handleSubmit()
  {
    props.submit(info)
    setinfo({name:"",age:"",gender:"",date:"",notes:"",medicine:""})
  }


  return (
    <div className='form-container'>
        
        <div className='input-block'>
            <label className='form-label'>Patient Name </label>
            <input type="text" name="name" style={{width:"50%"}} onChange={handleChange} value={info.name}/>
        </div>

        <div className='input-block'>
            <label className='form-label'>Patient Age</label>
            <input type="number" name="age" onChange={handleChange} value={info.age} />
        </div>

        <div className='input-block'>
            <label className='form-label' >Patient Gender</label>
            <select name='gender' onChange={handleChange} value={info.gender} >
                <option value="select">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Prefer Not to say">Prefer Not to say</option>
            </select>
        </div>
       
        <div className='input-block'>
            <label className='form-label'>Date</label>
            <input type="date" name="date" onChange={handleChange} value={info.date} />
        </div>
        
        
        <label className='form-label'>Medical Notes</label>
        <br />
        <textarea name="notes" onChange={handleChange} value={info.notes}></textarea>
        <br />
        <label className='form-label'>Medicine Details</label>
        <br />
        <textarea name="medicine" onChange={handleChange} value={info.medicine}></textarea>
 
        <footer>
            <button onClick={handleSubmit}>Save</button>
        </footer>
    </div>
  )
}
