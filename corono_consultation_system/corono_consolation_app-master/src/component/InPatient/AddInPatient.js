import React, { Component } from 'react'
import InPatientService from '../../service/InPatientService'
class AddInPatient extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             patientName:'',
             address:'',
             gender:'',
             doctorId:'',
             error:'',
             msg:''
        }
    }
    
    handleInput=(e)=>
    {
      this.setState({[e.target.name]:e.target.value})
    }
    handleForm=(event)=>
    {
         event.preventDefault()
        // console.log(this.state)
         InPatientService.createInPatient(this.state.patientName,this.state.address,this.state.gender,this.state.doctorId)
                        .then(response=>
                          {
                            
                       
                              console.log(this.state)
                              console.log(response.data)
                              this.setState({
                                  patientName:'',
                                  address:'',
                                  gender:'',
                                  doctorId:'',
                                  error:'',
                                //   msg:response.data,
                                  message: 'patient added successfully.',
                              })
                          })
                        .catch(e=>
                          {
                              this.setState({
                                  patientName:'',
                                  address:'',
                                  gender:'',
                                  doctorId:'',
                                  error:e.toString(),
                                  msg:''
                              })
                          })
         
    }

  render() {
      return (
          <div className='container'>
             <h3 className='text-primary'>InPatient Registration</h3> 
              <hr/>
              <h4 className='text-success'>{this.state.msg && this.state.msg}</h4>
              <h4 className='text-danger'>{this.state.error && this.state.error}</h4>

              <form method='post' onSubmit={this.handleForm}>
                  <div className='form-group'>
                      <label><h5>Patient Name</h5></label>
                      <input onChange={this.handleInput} value={this.state.patientName}
                       className='form-control' placeholder="Enter Patient Name"
                       name='patientName'/>
                  </div>
                  <div className='form-group'>
                      <label><h5>Patient Address</h5></label>
                      <input onChange={this.handleInput} value={this.state.address}
                       className='form-control' placeholder="Enter Patient Address"
                       name='address'/>
                  </div>
                  <div>
                      <label><h5>Gender</h5></label>
                  </div>
                  <div className='form-check'>
                      <input onChange={this.handleInput} className='form-check-input' type='radio' 
                       name='gender' value='Male'/>Male
                  </div>
                  <div className='form-check'>
                      <input onChange={this.handleInput}   className='form-check-input' type='radio' 
                       name='gender' value='Female'/>Female
                  </div>
                  <div className='form-group'>
                      <label><h5>Doctor ID</h5></label>
                      <input onChange={this.handleInput} value={this.state.doctorId}
                       className='form-control' placeholder="Enter Doctor Id"
                       name='doctorId'/>
                  </div>
                 
                  <button className='btn btn-info mt-2'>Register</button>
              </form>
          </div>
      )
  }
}

export default AddInPatient
