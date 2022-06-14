import React from 'react'

export default function Layout(props) {

  function handleUpdate()
  {
    props.update()
  }

  return (
    <div className='prescription'>
        
        <div className='info-content'>
            <h1 className='hospital-name'>National Medical College</h1>
            <h3> <strong className='bold'>Dr. John Killer</strong> M.B.B.S , M.S.(Ortho)</h3>
            <h6> 751 Victoria 123 Street, South Statue 204 </h6> 
            <h6>  Hometown, US 1234 </h6>  
            <h6> PH:(207) 808 2014 2014</h6>
            <h6>FAX: (207) 808 2015 2202</h6>
        </div>

        <div className='main-content'>

             <div className='flex flex-end'>
                <div className='flex'>
                    <label>S.No. :</label>
                    <div className='blank long-blank'> <h6>11100</h6> </div>
                </div>
             </div>         
            
              
              <div className='flex'>
                  <div className='flex'>
                      <label>Patient Name:</label> 
                      <div className='blank long-blank'><h6>{props.item.name}</h6></div>
                  </div>
                  <div className='flex'>
                      <label>Age:</label> 
                      <div className='blank short-blank'><h6>{props.item.age}</h6></div>
                  </div>
                  <div className='flex'>
                      <label>Gender:</label> 
                      <div className='blank short-blank'><h6>{props.item.gender}</h6></div>
                  </div>
              </div>

              <div className='flex'>
                  <div className='flex'>
                      <label>Address:</label> 
                      <div className='blank long-blank'><h6>{props.item.address}</h6></div>
                  </div>
                  <div className='flex'>
                      <label>Date:</label> 
                      <div className='blank long-blank'><h6>{props.item.date}</h6></div>
                  </div>
              </div>

              <div className='prescription'>
                  <h4>Medical Notes</h4>
                  <p>{props.item.notes}</p>
                  <br/>
                  
                  <h4>Medicine </h4>
                  <p>{props.item.medicine}</p>                  
              </div>

              <div className='flex flex-end rel-position'>
                  <div className='flex'>
                      <label>Doctor's Signature:</label> 
                      <div className='blank long-blank'><h6>Ashish Mehta</h6></div>
                  </div>                  
              </div>
              

        </div>

        <footer>
           <h6>www.hospitalmail@gmail.com</h6>
           <button onClick={handleUpdate}>Update</button>
        </footer>
             
    </div>
  )
}
