import React, { Component } from 'react'
import DoctorServiceAll from './Services/DoctorServiceAll'
import Footer from './Footer/Footer'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
export class PatientByDocId extends Component {

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
        DoctorServiceAll.getAllDoctor()
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

    getDoctorById()
    {
        DoctorServiceAll.getDoctorById()
    }
    
    generateReport=(docId)=>
    {
        DoctorServiceAll.generateReport(docId)
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
                    this.state.doctors.length!==0 ?
                    <div>
                        <Navbar></Navbar>
                    <h3>All Doctors List</h3>
                    <hr/>
                    
                    <table id='myTable' className='table table-bordered table-hover table-striped'>
                    <thead className='bg-primary' style={{color:"gold"}}>
                        <tr>
                            <th scope="col">Patient First Name</th>
                            <th scope="col">Patient Last Name</th>
                            <th scope="col">Patient Gender</th>
                            <th scope="col">Patient Blood group</th>
                            <th scope="col">Generate Report</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.doctors.map(doctor=>(
                                    <tr>
                                    <td>{patient.patientFirstName}</td>
                                    <td>{patient.patientLastName}</td>
                                    <td>{patient.gender}</td>
                                    <td>{patient.bloodGroup}</td>
                                    <td>
                                        <button onClick={()=>this.generateReport(patient.patientId)} className='btn btn-danger'>Generate Report</button>
                                    </td>
                                    </tr>
                            ))
                        }
                    </tbody>
                </table>
                </div>
                :
                <div><Footer></Footer>
                <h4 className='text-danger container'>No Doctor Available
                <h3>  <Link to="/">Back to Home</Link></h3>
                </h4>
                </div>
        )
    }


}

export default AllDoctor