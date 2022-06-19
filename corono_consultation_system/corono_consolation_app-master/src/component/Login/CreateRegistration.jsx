import React, { Component } from 'react'
import RegistrationService from '../Services/RegistrationService'
class CreateRegistration extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
          patientFirstName:'',
          patientLastName:'',
          patientEmail:'',
          patientMobNo:'',
          patientPassward:'',
          gender:'',
          userType:'',
          bloodGroup:'',
             error:'',
             msg:''
        };
      this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(data) {
      console.log(data);
    }
    
    handleInput=(e)=>
    {
      this.setState({[e.target.name]:e.target.value})
    }
    handleForm=(event)=>
    {
         event.preventDefault()
        // console.log(this.state)
         RegistrationService.createRegistration(this.state.patientFirstName,this.state.patientLastName,this.state.patientEmail,this.state.patientMobNo,this.state.patientPassward,this.state.gender,this.state.userType,this.state.bloodGroup)
                        .then(response=>
                          {
                              console.log(this.state)
                              console.log(response.data)
                              this.setState({
                                  patientFirstName:'',
                                  patientLastName:'',
                                  patientEmail:'',
                                  patientMobNo:'',
                                  patientPassward:'',
                                  gender:'',
                                  userType:'',
                                  bloodGroup:'',
                                  error:'',
                                  msg:response.data
                              })
                          })
                        .catch(e=>
                          {
                              this.setState({
                                  patientFirstName:'',
                                  patientLastName:'',
                                  patientEmail:'',
                                  patientMobNo:'',
                                  patientPassward:'',
                                  gender:'',
                                  userType:'',
                                  bloodGroup:'',
                                  error:e.toString(),
                                  msg:''
                              })
                          })
    }
    
  render() {

      return (
          
          <div class="alert alert-primary alert-dismissible" role="alert" id="liveAlert">
             <h3 className='text-primary'>Patient Registration</h3> 
              <hr/>
              <h4 className='text-success'>{this.state.msg && this.state.msg}</h4>
              <h4 className='text-danger'>{this.state.error && this.state.error}</h4>

<<<<<<< HEAD
                <form class="row g-3 needs-validation" method='post' onSubmit={this.handleForm} novalidate>
                    <div class="col-md-4">
                        <label for="validationCustom01" class="form-label" className='form-group'>Patient First Name</label>
                        <input 
                            type="text"
                            class="form-control"
                            id="validationCustom01"
                            pattern="[A-Z][a-z]*" 
                            title="Name must contain only letters of at least 2 Charecter (Ex. Rob)"
                            onChange={this.handleInput} 
                            value={this.state.patientFirstName}
                            className='form-control'
                            name='patientFirstName' minlength="2" maxlength="100" required autofocus/>
                            <div class="invalid-feedback">
                                Please enter a first name (minimum 2 characters)
                            </div>
                    </div>
                    <div class="col-md-4">
                        <label for="validationCustom02" class="form-label">Patient Last Name</label>
                        <input 
                            type="text"
                            class="form-control"
                            id="validationCustom02"
                            pattern="[A-Z][a-z]*" 
                            title="Name must contain only letters of at least 2 Charecter (Ex. Rob)"
                            onChange={this.handleInput} 
                            value={this.state.patientLastName}
                            className='form-control'
                            id='patientLastName'
                            name='patientLastName' minlength="2" maxlength="100" required autofocus/>
                            <div class="invalid-feedback">
                                Please enter a last name (minimum 2 characters)
                            </div>
                    </div>
                    <div class="col-md-4">
                        <label for="validationCustom03" class="form-label">Patient Email</label>
                        <input 
                            type='tel' 
                            onChange={this.handleInput} 
                            name='patientEmail' 
                            value={this.state.patientEmail}
                            value={this.state.patientEmail}
                            title="Email format must be xxyz@gmail.com"
                            id='validationCustome03'
                            class="form-control"
                            className='form-control'
                            pattern="[a-z0-9._%+-]+@gmail.com" 
                            required autofocus/>
                            <div class="invalid-feedback">
                                Please enter a Email
                            </div>
                    </div>
                    <div class="col-md-4">
                        <label for="validationCustom04" class="form-label">Patient Mobile Number</label>
                        <div class="input-group">
                            <div class="input-group-text">91</div>
                            <input 
                                type="number" 
                                class="form-control" 
                                id="validationCustom04" 
                                title="Nuber must start with 6/7/8/9 (Ex. 6578887623)"
                                onChange={this.handleInput} 
                                value={this.state.patientMobNo}
                                className='form-control'
                                name='patientMobNo' minLength='10' maxLength='10' pattern="[6789][0-9]{9}" required/>
                                <div class="invalid-feedback">
                                    Please enter a mobile number
                                </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <label for="inputPassword5" class="col-form-label">Password</label>
                        <input 
                            onChange={this.handleInput} 
                            value={this.state.patientPassward}
                            className='form-control'
                            type="password" 
                            id="inputPassword5"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                            aria-describedby="passwordHelpInline"
                            name='patientPassward' minLength="8" maxLength="20" required/>
                            <div class="invalid-feedback">
                                Please enter a password
                            </div>
                    </div>
                    <div class="col-md-4" className='form-check'>
                        <label for="validationCustom06" class="form-label">Blood Group</label>
                        <select class="form-select" name="bloodGroup" value={this.state.bloodGroup} id="validationCustom06" onChange={this.handleInput} required>
                        <option selected disabled >BloodGroup...</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="AB">AB</option>
                        <option value="O">O</option>
                        </select>
                        <div class="invalid-feedback">
                            Please select a blood group.
                        </div>
                    </div> 
                    <div class="col-md-4" className='form-check'>
                        <label for="validationCustom08" class="form-label">User Type</label>
                        <select class="form-select" name="userType" value={this.state.userType} id="validationCustom08" onChange={this.handleInput}  required>
                        <option selected disabled >Type...</option>
                        <option value="user">user</option>
                        </select>
                        <div class="invalid-feedback">
                            Please select a type.
                        </div>
                    </div>
                    <div class="col-md-4" className='form-check'>
                        <label for="validationCustom07" class="form-label">Gender</label>
                        <select class="form-select" name="gender" value={this.state.gender} id="validationCustom07" onChange={this.handleInput}  required>
                        <option selected disabled >Gender...</option>
                        <option value="MALE">MALE</option>
                        <option value="FEMALE">FEMALE</option>
                        </select>
                        <div class="invalid-feedback">
                            Please select a gender.
                        </div>
                    </div>
                    <button className='btn btn-success mt-2' type='submit'>Register</button>
                </form>
            </div>
        )
    }
=======
              <form class="row g-3 needs-validation" method='post' onSubmit={this.handleForm} novalidate>
                  <div class="col-md-4">
                      <label for="validationCustom01" class="form-label" className='form-group'>Patient First Name</label>
                      <input 
                          type="text"
                          class="form-control"
                          id="validationCustom01"
                          onChange={this.handleInput} 
                          value={this.state.patientFirstName}
                          className='form-control'
                          name='patientFirstName' minlength="2" maxlength="100" required autofocus/>
                          <div class="invalid-feedback">
                              Please enter a first name (minimum 2 characters)
                          </div>
                  </div>
                  <div class="col-md-4">
                      <label for="validationCustom02" class="form-label">Patient Last Name</label>
                      <input 
                          type="text"
                          class="form-control"
                          id="validationCustom02"
                          onChange={this.handleInput} 
                          value={this.state.patientLastName}
                          className='form-control'
                          id='patientLastName'
                          name='patientLastName' minlength="2" maxlength="100" required autofocus/>
                          <div class="invalid-feedback">
                              Please enter a last name (minimum 2 characters)
                          </div>
                  </div>
                  <div class="col-md-4">
                      <label for="validationCustom03" class="form-label">Patient Email</label>
                      <input 
                          type='tel' 
                          onChange={this.handleInput} 
                          name='patientEmail' 
                          value={this.state.patientEmail}
                          id='validationCustome03'
                          class="form-control"
                          className='form-control'
                          pattern="[a-z0-9._%+-]+@gmail.com" 
                          required autofocus/>
                          <div class="invalid-feedback">
                              Please enter a Email
                          </div>
                  </div>
                  <div class="col-md-4">
                      <label for="validationCustom04" class="form-label">Patient Mobile Number</label>
                      <div class="input-group">
                          <div class="input-group-text">91</div>
                          <input 
                              type="number" 
                              class="form-control" 
                              id="validationCustom04" 
                              onChange={this.handleInput} 
                              value={this.state.patientMobNo}
                              className='form-control'
                              name='patientMobNo' minLength='10' maxLength='10' pattern='[6789]{1}[0-9]{9}' required/>
                              <div class="invalid-feedback">
                                  Please enter a mobile number
                              </div>
                      </div>
                  </div>
                  <div class="col-md-4">
                      <label for="inputPassword5" class="col-form-label">Password</label>
                      <input 
                          onChange={this.handleInput} 
                          value={this.state.patientPassward}
                          className='form-control'
                          type="password" 
                          id="inputPassword5"
                          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                          aria-describedby="passwordHelpInline"
                          name='patientPassward' minLength="8" maxLength="20" required/>
                          <div class="invalid-feedback">
                              Please enter a password
                          </div>
                          <div class="valid-feedback">
                              Looks good!
                          </div>
                          <div class="col-auto">
                      </div>
                  </div>
                  <div class="col-md-4" className='form-check'>
                      <label for="validationCustom06" class="form-label">Blood Group</label>
                      <select class="form-select" name="bloodGroup" value={this.state.bloodGroup} id="validationCustom06" onChange={this.handleInput} required>
                      <option selected disabled >BloodGroup...</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="AB">AB</option>
                      <option value="O">O</option>
                      </select>
                      <div class="invalid-feedback">
                          Please select a blood group.
                      </div>
                      <div class="valid-feedback">
                          Looks good!
                      </div>
                  </div> 
                  <div class="col-md-4" className='form-check'>
                      <label for="validationCustom08" class="form-label">User Type</label>
                      <select class="form-select" name="userType" value={this.state.userType} id="validationCustom08" onChange={this.handleInput}  required>
                      <option selected disabled >Type...</option>
                      <option value="user">user</option>
                      </select>
                      <div class="invalid-feedback">
                          Please select a type.
                      </div>
                      <div class="valid-feedback">
                          Looks good!
                      </div>
                  </div>
                  <div class="col-md-4" className='form-check'>
                      <label for="validationCustom07" class="form-label">Gender</label>
                      <select class="form-select" name="gender" value={this.state.gender} id="validationCustom07" onChange={this.handleInput}  required>
                      <option selected disabled >Gender...</option>
                      <option value="MALE">MALE</option>
                      <option value="FEMALE">FEMALE</option>
                      </select>
                      <div class="invalid-feedback">
                          Please select a gender.
                      </div>
                      <div class="valid-feedback">
                          Looks good!
                      </div>
                  </div>
                  <button className='btn btn-success mt-2' type='submit'>Register</button>
              </form>
          </div>
      )
  }
>>>>>>> 6037a74ebae7a82c35ab01ef9ffe6a29a5633f49
}

export default CreateRegistration