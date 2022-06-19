import React, { Component } from 'react'
import AdminNavbar from '../PatientsOfDoctor/AdminNavbar'
import DoctorServiceAll from '../Services/DoctorServiceAll'

export class AllAdminDoctorList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             doctors:[],
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
                                  doctors:response.data,
                                  error:''
                                })
                        })
                    .catch(err=>
                        {
                            console.log(err)
                            this.setState({
                                error:err.toString(),
                                doctors:[]
                            })
                        })
    }

    getDoctorById()
    {
        DoctorServiceAll.getDoctorById()
    }
    deleteDoctor=(docId)=>
    {
        DoctorServiceAll.deleteDoctor(docId)
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
                        <AdminNavbar></AdminNavbar>
                    
                    <div className="container">
                    <h3>All Doctors List</h3>
                    <hr/>
                    
                <table id='myTable' className='table table-bordered table-hover table-striped'>
                    <thead className='bg-primary' style={{color:"gold"}}>
                        <tr>
                            <th scope="col">Doctor ID</th>
                            <th scope="col">Doctor Name</th>
                            <th scope="col">Doctor UserName</th>
                            <th scope="col">Doctor PhoneNumber</th>
                            <th scope="col">Doctor Gender</th>
                            <th scope="col">Doctor Email</th>
                            <th scope="col">Doctor Password</th>
                            <th scope="col">User Type</th>
                            <th scope="col">Doctor Degree</th>
                            <th scope="col">Doctor Experience</th>
                            <th scope="col">Doctor Date</th>
                            <th scope="col">Action1</th>
                            <th scope="col">Action2</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.doctors.map(doctor=>(
                                    <tr>
                                    <td>{doctor.docId}</td>
                                    <td>{doctor.docName}</td>
                                    <td>{doctor.userName}</td>
                                    <td>{doctor.docPhone}</td>
                                    <td>{doctor.gender}</td>
                                    <td>{doctor.docMail}</td>
                                    <td>{doctor.password}</td>
                                    <td>{doctor.userType}</td>
                                    <td>{doctor.docDegree}</td>
                                    <td>{doctor.docExperience}</td>
                                    <th>{doctor.docDate}</th>
                                    <td>
                                        <button onClick={()=>this.deleteDoctor(doctor.docId)} className='btn btn-danger'>Delete</button>
                                    </td>
                                    <td>
                                        <button onClick={()=>this.updateDetails(doctor.docId)} className='btn btn-primary'>Update</button>
                                    </td>
                                    </tr>
                            ))
                        }
                    </tbody>
                </table>
                </div>
                </div>
                :
                <h4 className='text-danger container'>No Doctor Available</h4>
        )
    }


}

export default AllAdminDoctorList