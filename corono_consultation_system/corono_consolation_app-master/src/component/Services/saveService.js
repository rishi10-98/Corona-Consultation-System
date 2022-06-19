import React, { Component } from 'react'
import ServicesService from './component/service/ServicesService'
class saveService extends Component {

    constructor(props) {
        super(props)

        this.state = {
            ventilatorsNo: '',
            ambulanceStatus: '',
            emergencyCare: '',
            emergencyExtraCost: '',
            ventilatorCost: '',
            error: '',
            msg: ''
        }
    }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleForm = (event) => {
        event.preventDefault()
        // console.log(this.state)
        ServicesService.saveServices(this.state.ventilatorsNo, this.state.ambulanceStatus, this.state.emergencyCare, this.state.emergencyExtraCost, this.state.ventilatorCost)
            .then(response => {

                //  this.props.history.push('./component/InPatient/AddInPatient');
                window.location.href = './component/Services/saveService';
                console.log(this.state)
                console.log(response.data)
                this.setState({
                    ventilatorsNo: '',
                    ambulanceStatus: '',
                    emergencyCare: '',
                    emergencyExtraCost: '',
                    ventilatorCost: '',
                    error: '',
                    //   msg:response.data,
                    message: 'Service added Successfully.',
                })
            })
            .catch(e => {
                this.setState({
                    ventilatorsNo: '',
                    ambulanceStatus: '',
                    emergencyCare: '',
                    emergencyExtraCost: '',
                    ventilatorCost: '',
                    error: e.toString(),
                    msg: ''
                })
            })

    }

    render() {
        return (
            <div className='container'>
                <h3 className='text-primary'>Add Service</h3>
                <hr />
                <h4 className='text-success'>{this.state.msg && this.state.msg}</h4>
                <h4 className='text-danger'>{this.state.error && this.state.error}</h4>

                <form method='post' onSubmit={this.handleForm}>
                    <div className='form-group'>
                        <label><h5>Ventilator Number</h5></label>
                        <input onChange={this.handleInput} value={this.state.ventilatorsNo}
                            className='form-control' placeholder="Enter Ventilator Number"
                            name=' ventilatorsNo' />2
                    </div>
                    {/* <div>
                        <label><h5>Ambulance Status</h5></label>
                    </div>
                    <div className='form-check'>
                        <input onChange={this.handleInput} className='form-check-input' type='radio'
                            name='Ambulance Status' value='AVAILABLE' />AVAILABLE
                    </div>
                    <div className='form-check'>
                        <input onChange={this.handleInput} className='form-check-input' type='radio'
                            name='Ambulance Status' value='NOT_AVAILABLE' />NOT AVAILABLE
                    </div>
                    <div className='form-group'>
                        <label><h5>Patient Address</h5></label>
                        <input onChange={this.handleInput} value={this.state.address}
                            className='form-control' placeholder="Enter Patient Address"
                            name='address' />
                    </div>
                    <div>
                        <label><h5>Gender</h5></label>
                    </div>
                    <div className='form-check'>
                        <input onChange={this.handleInput} className='form-check-input' type='radio'
                            name='gender' value='Male' />Male
                    </div>
                    <div className='form-check'>
                        <input onChange={this.handleInput} className='form-check-input' type='radio'
                            name='gender' value='Female' />Female
                    </div>
                    <div className='form-group'>
                        <label><h5>Doctor ID</h5></label>
                        <input onChange={this.handleInput} value={this.state.doctorId}
                            className='form-control' placeholder="Enter Doctor Id"
                            name='doctorId' />
                    </div> */}

                    <button className='btn btn-info mt-2'>Save</button>
                </form>
            </div>
        )
    }
}

export default saveService;
