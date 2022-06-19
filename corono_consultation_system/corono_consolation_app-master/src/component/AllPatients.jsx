import React, { Component } from 'react'
import RegistrationService from '../services/RegistrationService'
import Footer from './Footer'
export class AllPatients extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             patients:[],
             error:'',
             msg:''
        }
    }
    

    componentDidMount()
    {
        this.getAllDetails()
    }

    getAllDetails()
    {
        RegistrationService.getAllDetails()
                    .then(response=>
                        {
                          this.setState(
                              {
                                  patients:response.data,
                                  error:''
                                })
                        })
                    .catch(err=>
                        {
                            console.log(err)
                            this.setState({
                                error:err.toString(),
                                patients:[]
                            })
                        })
    }

    deletePatient=(patientId)=>
    {
        RegistrationService.deletePatient(patientId)
                    .then(response=>
                        {
                            this.setState({
                                error:'',
                                msg:response.data
                            })
                             console.log(response)
                        })
                    .catch(err=>
                        {
                            console.log(err)
                        })
                        this.getAllDetails()
                      
    }

    render() {
        return (
          
                
                    this.state.patients.length!=0 ?
                    <div>
                    <h3>All Patients List</h3>
                    <hr/>
                <table className='table table-bordered table-hover table-striped'>
                    <thead className='bg-primary' style={{color:"gold"}}>
                        <tr>
                            <th scope="col">Patient ID</th>
                            <th scope="col">Patient First Name</th>
                            <th scope="col">Patient Last Name</th>
                            <th scope="col">Patient Email</th>
                            <th scope="col">Patient Mobile Number</th>
                            <th scope="col">Patient Password</th>
                            <th scope="col">Patient Gender</th>
                            <th scope="col">Patient Blood group</th>
                            <th scope="col">Action1</th>
                            <th scope="col">Action2</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.patients.map(patient=>(
                                    <tr>
                                    <td>{patient.patientId}</td>
                                    <td>{patient.patientFirstName}</td>
                                    <td>{patient.patientLastName}</td>
                                    <td>{patient.patientEmail}</td>
                                    <td>{patient.patientMobNo}</td>
                                    <td>{patient.patientPassward}</td>
                                    <td>{patient.bloodGroup}</td>
                                    <td>{patient.gender}</td>
                                    <td>
                                        <button onClick={()=>this.deletePatient(patient.patientId)} className='btn btn-danger'>Delete</button>
                                    </td>
                                    <td>
                                        <button onClick={()=>this.updatePatient(patient.patientId)} className='btn btn-primary'>Update</button>
                                    </td>
                                    </tr>
                            ))
                        }
                    </tbody>
                </table>
                <Footer></Footer>
                </div>
                :
                <h4 className='text-danger'>No Patient Available</h4>
            
        )
    }
}

export default AllPatients