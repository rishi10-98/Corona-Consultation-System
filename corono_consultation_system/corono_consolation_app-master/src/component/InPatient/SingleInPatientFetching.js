import axios from 'axios'
import React ,{useState,useEffect} from 'react'



function SingleInPatientFetching() {
   
    const [inpatient,setInPatient]=useState({})
    const [patientId,setPatientId]=useState(22)
    const [error,setError]=useState('')

    useEffect(()=>
    {
        axios.get(`http://localhost:8080/api/inpatient/${patientId}`)
        .then(response=>
            {
                setInPatient(response.data)  
            })
        .catch(err=>
        {
            console.log(err.request.responseText)
            setError(err.request.responseText)
            setInPatient(0)
        })
    },[patientId])

   let data1=
   <div className='container' >
   <label><h4 className='text-primary'>Inpatient Id</h4></label>
   <input value={patientId} onChange={(e)=>setPatientId(e.target.value)} className='form-control' placeholder='Search Inpatient by Id'/>
   <hr/>
   <h6>Inpatient ID : {inpatient.patientId}</h6>
   <h6>Inpatient Name :{inpatient.patientName}</h6>
   <h6>Inpatient Address :{inpatient.address}</h6>
   <h6>Inpatient Gender :{inpatient.gender}</h6>
   <h6>Doctor ID :{inpatient.doctorId}</h6>
    </div>
  
  let data2=
  <div className='container'>
  <label>Inpatient ID</label>
  <input value={patientId} onChange={(e)=>setPatientId(e.target.value)} className='form-control'/>
  <hr/>
  <h5 className='text-danger'>{error && error}</h5>
 </div>

 if(error!="InPatient with Id: "+patientId+" not found")
 {
     return data1
 }
 else
 {
     return data2
 }


}

export default SingleInPatientFetching
