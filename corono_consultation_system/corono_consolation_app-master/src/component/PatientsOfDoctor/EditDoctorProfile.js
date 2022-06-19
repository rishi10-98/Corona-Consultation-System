import axios from 'axios';
import React, { Component } from 'react'
import Footer from '../Footer/Footer';
import RegistrationService from '../Services/RegistrationService'
import DoctorNavbar from './DoctorNavbar';
class EditDoctorProfile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            docName: '',
            userName: '',
            docPhone: '',
            gender: '',
            docMail: '',
            password: '',
            userType: '',
            docDegree: '',
            docExperience: '',
            docdate: '',
            departmentName: '',
            error: '',
            msg: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
        axios.get('http://localhost:8080/doctor/docId')
            .then((res) => {
                this.setState({
                    docName: res.data.docName,
                    userName: res.data.userName,
                    docPhone: res.data.docPhone,
                    gender: res.data.gender,
                    docMail: res.data.docMail,
                    password: res.data.password,
                    docDegree: res.data.docDegree,
                    docExperience: res.data.docExperience,
                    docdate: res.data.docdate
                })
            })
            .catch(err => console.log(err))
    }
    onSubmit(data) {
        console.log(data);
    }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })

    }
    handleForm = (event) => {
        event.preventDefault()
        // console.log(this.state)
        RegistrationService.createRegistration(this.state.docName, this.state.userName, this.state.docPhone, this.state.gender, this.state.docMail, this.state.passward, this.state.userType, this.state.docDegree, this.state.docExperience, this.state.docdate, this.state.departmentName)
            .then(response => {
                console.log(this.state)
                console.log(response.data)
                this.setState({
                    docName: '',
                    userName: '',
                    docPhone: '',
                    gender: '',
                    docMail: '',
                    password: '',
                    userType: '',
                    docDegree: '',
                    docExperience: '',
                    docdate: '',
                    departmentName: '',
                    error: '',
                    msg: response.data
                })
            })
            .catch(e => {
                this.setState({
                    docName: '',
                    userName: '',
                    docPhone: '',
                    gender: '',
                    docMail: '',
                    password: '',
                    userType: '',
                    docDegree: '',
                    docExperience: '',
                    docdate: '',
                    departmentName: '',
                    error: e.toString(),
                    msg: ''
                })
            })
    }

    render() {

        return (
            <div>
                <DoctorNavbar></DoctorNavbar>
                <div class="alert alert-primary alert-dismissible" role="alert" id="liveAlert">
                    <h3 className='text-primary'>Edit Doctor Profile</h3>
                    <hr />
                    <h4 className='text-success'>{this.state.msg && this.state.msg}</h4>
                    <h4 className='text-danger'>{this.state.error && this.state.error}</h4>

                    <form class="row g-3 needs-validation" method='post' onSubmit={this.handleForm} novalidate>
                        <div class="col-md-4">
                            <label for="validationCustom01" class="form-label" className='form-group'>Doctor Name</label>
                            <input
                                type="text"
                                class="form-control"
                                id="validationCustom01"
                                onChange={this.handleInput}
                                value={this.state.docName}
                                className='form-control'
                                name='patientFirstName' minlength="2" maxlength="100" required autofocus />
                            <div class="invalid-feedback">
                                Please enter Doctor name (minimum 2 characters)
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label for="validationserver05" class="form-label" className='form-group'>Phone Number</label>
                            <div class="input-group">
                                <div class="input-group-text">91</div>
                                <input
                                    name="docPhone" data-validation="number"
                                    data-validation-allowing="negative,number"
                                    title="Nuber must start with 6/7/8/9 (Ex. 6578887623)"
                                    data-validation="number" datavalidation-ignore="$" required="required" class="form-control"
                                    id="phone_no" minLength="10" maxlength="10" pattern="[6789][0-9]{9}"
                                    onChange={this.handleInput}
                                    value={this.state.docPhone} />
                                <div id="validationServerUsernameFeedback" class="invalid-feedback">
                                    Please Enter your phone number
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label for="exampleInputEmail1" class="form-label">Email</label>
                            <div class="input-group has-validation">
                                <input pattern="[a-z0-9._%+-]+@gmail.com" type="Email" name="docMail" class="form-control" id="exampleInputEmail1"
                                    title="Email format must be xxyz@gmail.com"
                                    aria-describedby="emailHelp" required
                                    onChange={this.handleInput}
                                    value={this.state.docMail} />
                                <div id="validationServerUsernameFeedback" class="invalid-feedback">
                                    Please Enter your  Email
                                </div>
                            </div>

                        </div>
                        <div class="col-md-4">
                            <label for="validationserver05" class="form-label">Doctor Degree</label>
                            <input
                                type="text" class="form-control is-invalid" id="validationServerUsername"
                                pattern="[A-Z]+"
                                title="Plz Add your degree (Ex. MD,MBBS)"
                                className='form-control' name='docDegree' minlength="2" maxlength="100" required autofocus
                                onChange={this.handleInput}
                                value={this.state.docDegree} />
                            <div id="validationServerUsernameFeedback" class="invalid-feedback">
                                Please Enter your  degree
                            </div>

                        </div>
                        <div class="col-md-4">
                            <label for="validationserver05" class="form-label">Experience</label>
                            <input
                                onChange={this.handleInput}
                                value={this.state.docExperience}
                                className='form-control'
                                type="number"
                                id="docExperience"
                                pattern="\d*"
                                name='docExperience' minLength="1" maxLength="2" required />
                            <div class="invalid-feedback">
                                Please enter your experience
                            </div>
                        </div>

                        <div class="col-md-4" className='form-group'>
                            <label for="exampleInputPassword1">Password</label>
                            <input pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                onChange={this.handleInput}
                                value={this.state.password}
                                className='form-control'
                                aria-describedby="passwordHelpInline"
                                type="password"
                                id="inputPassword5"
                                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" onChange={this.handleInput} id="exampleInputPassword1" value={this.state.patientPassward}
                                className='form-control'
                                name='passward' />
                            <div class="invalid-feedback">
                                Please enter a password
                            </div>
                        </div>

                        <button className='btn btn-success mt-2' type='submit'>Update Profile</button>
                    </form>
                    <Footer></Footer>
                </div>
            </div>
        )
    }
}

export default EditDoctorProfile;