import React, {  useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import DoctorSearch from './DoctorSearch';
import Navbar from '../Navbar';

function DoctorDisplay() {
 

  
  const [cred,setCred]=useState({
    name:"",
  })

  
    return (
      <div>
      <Navbar />
      <div className="container " >
      
        <div>
          <h3> All doctor Details</h3>
          <form action="#"  >
          <div class="input-group" for="validationTooltip01">

            <input type="search" class="form-control rounded" id="validationDefault01" name = "inputDoctorSearch" 
            placeholder="Search Doctor by name" aria-label="Search"aria-describedby="search-addon"
             value={cred.name} onChange={e=>setCred({...cred,name:e.target.value})}  required/>
            
            <Link  type="submit" to="/doctordearch" id="doctorsearch" class="btn btn-outline-primary">search</Link>
          </div>
          <div className="text-warning ">
      {/* <input type="reset" id="formreset"  /> */}

        </div>
          </form>
          <hr></hr>

          { 
            <Link class="registration-link btn btn-secondary mt-2" to="/AllDoctor">List Of Doctor</Link>  
          }
              <DoctorSearch cred={cred}/>
        </div>  
        
      </div>
      </div>
         )
}

export default DoctorDisplay ;