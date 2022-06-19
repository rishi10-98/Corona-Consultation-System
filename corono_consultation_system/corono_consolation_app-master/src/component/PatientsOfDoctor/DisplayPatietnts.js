import React, { Component } from 'react';
import PatientService from '../../service/PatientService';
class DisplayPatients extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             patient:[],
             error:'',
             msg:''
        }
    }
   componentDidMount()
    {
        this.getAllPatient()
    }

    getAllPatient(){
        PatientService.getAllPatient()
        .then(response=>
            {
              this.setState(
                  {
                    patient:response.data,
                      error:''
                    })
            })
        .catch(err=>
            {
                console.log(err)
                this.setState({
                    error:err.toString(),
                    patient:[]
                })
            })
        }


    render() {
        return (
          this.state.patient.length!==0 ?
        <div  className="container " >
          <div>
              <h3> All Patient Details</h3>
              <span class="input-group">
  <input type="search" class="form-control rounded" placeholder="Search for patients" aria-label="Search"
    aria-describedby="search-addon" />
  <button type="button" class="btn btn-outline-primary">Search</button>
</span>
<hr></hr>
          </div>
<table style={{background:"linear-gradient(rgb(255 255 255) 2%, rgb(195 173 188) 135%)"} } class="table table-striped table-hover table-bordered table-responsive ">
  <thead class="table align-middle table-dark " style={{color:"gold"}}>
    <tr > 
      <th scope="col">Patient ID</th>
      <th scope="col">Patient Name</th>
      <th scope="col">Patient Age</th>
      <th scope="col">Gender</th>
      <th>Actions</th>
      
      
    </tr>
    
  </thead>
  <tbody>{
      this.state.patient.map(patient=>(
    <tr style={{color:"#0d1310"}}>
      <td>{patient.patientId}</td>
      <td>{patient.patientName}</td> 
      <td>{patient.patientAge}</td>
      <td>{patient.gender}</td>
      <button className='btn btn-primary' >Generate Report</button>


     
    </tr>

   )) 
      }
  </tbody>
</table>

        <Footer></Footer>

      </div>
      :
      <h4 className='text-danger'>No Patient Available</h4>
        );
    }
}

export default DisplayPatients;