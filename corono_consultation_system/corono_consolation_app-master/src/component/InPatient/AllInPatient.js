import React, { Component } from 'react'
import InPatientService from '../../service/InPatientService'
export class AllInPatient extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             inpatient:[],
             error:'',
             msg:''
        }
    }
    

    componentDidMount()
    {
        this.getAllInPatient()
    }

    getAllInPatient()
    {
        InPatientService.getAllInPatient()
                    .then(response=>
                        {
                          this.setState(
                              {
                                  inpatient:response.data,
                                  error:''
                                })
                        })
                    .catch(err=>
                        {
                            console.log(err)
                            this.setState({
                                error:err.toString(),
                                inpatient:[]
                            })
                        })
    }

    deleteInPatient=(patientId)=>
    {
        InPatientService.deleteInPatient(patientId)
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
                        this.getAllInPatient()
                      
    }

    render() {
        return (
          
                
                    this.state.inpatient.length!=0 ?
                    <div className= 'container'>
                    <h3>List of InPatients</h3>
                    <hr/>
                <table className='table table-bordered table-hover table-striped'>
                    <thead className='bg-dark' style={{color:"gold"}}>
                        <tr>                            
                            <th>InPatient Id</th>
                            <th>InPatient Name</th>
                            <th>InPatient Address</th>
                            <th>InPatient Gender</th>
                            <th>Doctor ID</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.inpatient.map(inpatient=>(
                                    <tr> 
                                    <td>{inpatient.patientId}</td>                                   
                                    <td>{inpatient.patientName}</td>
                                    <td>{inpatient.address}</td>
                                    <td>{inpatient.gender}</td>
                                    <td>{inpatient.doctorId}</td>
                                    <td>
                                        <button onClick={()=>this.deleteInPatient(inpatient.patientId)} className='btn btn-danger'>Delete</button>
                                    </td>
                                    </tr>
                            ))
                        }
                    </tbody>
                </table>
                </div>
                :
                <h4 className='text-danger'>No InPatient Available</h4>
            
        )
    }
}

export default AllInPatient
