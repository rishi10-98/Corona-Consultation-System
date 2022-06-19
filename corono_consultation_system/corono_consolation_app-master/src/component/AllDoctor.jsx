import React, { Component } from 'react'
import DoctorServiceAll from '../component/Services/DoctorServiceAll'
import Footer from './Footer/Footer'
import UserNavbar from './PatientsOfDoctor/UserNavbar'

export class AllDoctor extends Component {

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
    
    
    

    render() {
        return (
                    this.state.doctors.length!==0 ?
                    <div>
                        <UserNavbar></UserNavbar>
                    
                    <div className="container">
                        
                    <h3>All Doctors List</h3>
                    <hr/>
                    
                <table id='myTable' className='table table-bordered table-hover table-striped'>
                    <thead className='bg-primary' style={{color:"gold"}}>
                        <tr>
                            <th scope="col">Doctor ID</th>
                            <th scope="col">Doctor Name</th>
                         
                           
                            <th scope="col">Doctor Gender</th>
                            <th scope="col">Doctor Email</th>
                           
                            
                            <th scope="col">Doctor Experience</th>
                            <th scope="col">Doctor Date</th>
<<<<<<< HEAD
                            <th scope="col">Doctor Department Name</th>

                            {/* <th scope="col">Action1</th>
                            <th scope="col">Action2</th> */}
=======
                            <th scope="col">Action1</th>
                           
>>>>>>> e7a2400eac7932e32bc375ebc5b927657f6c118d
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.doctors.map(doctor=>(
                                    <tr>
                                    <td>{doctor.docId}</td>
                                    <td>{doctor.docName}</td>
                         
                                   
                                    <td>{doctor.gender}</td>
                                    <td>{doctor.docMail}</td>
                                    
                                    
                                    <td>{doctor.docExperience}</td>
                                    <th>{doctor.docDate}</th>
<<<<<<< HEAD
                                    <th>{doctor.departmentName}</th>

                                    {/* <td>
                                        <button onClick={()=>this.deletePatient(doctor.docId)} className='btn btn-danger'>Delete</button>
                                    </td>
                                    <td>
                                        <button onClick={()=>this.updatePatient(doctor.docId)} className='btn btn-primary'>Update</button>
                                    </td> */}
=======
                                    <td>
                                        <button onClick={()=>this.updateDetails(doctor.docId)} className='btn btn-primary'>Update</button>
                                    </td>
>>>>>>> e7a2400eac7932e32bc375ebc5b927657f6c118d
                                    </tr>
                            ))
                        }
                    </tbody>
                </table>
               
                </div>
                <Footer></Footer>
                </div>
                :
                <h4 className='text-danger container'>No Doctor Available</h4>
        )
    }


}

export default AllDoctor