import React, { Component } from 'react';
import OutPatientService from '../service/OutPatientService';

class GenerateBill extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pId: '',
            Bill: '',
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
        OutPatientService.getPatientBill(this.state.pId)
            .then(response => {
                this.setState(
                    {
                        Bill: response.data,
                        pId: '',
                        error: '',
                        msg: ''
                    })
            })
            .catch(err => {
                console.log(err)
                this.setState({
                    error: err.toString(),
                    Bill: '',
                    pId: '',
                    msg: ''
                })
            })

    }

    handlePdf=(event)=>{

        event.preventDefault()
        // console.log(this.state)
        OutPatientService.getBillPdf(this.state.Bill)
            .then(response => {
                this.setState(
                    {
                        Bill: '',
                        pId: '',
                        error: '',
                        msg: 'PDF Generated'
                    })
            })
            .catch(err => {
                console.log(err)
                this.setState({
                    error: err.toString(),
                    Bill: '',
                    pId: '',
                    msg: ''
                })
            })

    }

    render() {
        return (
            <div>
                <form method='post' onSubmit={this.handleForm}>
                    <div className='form-group'>
                        <label>Enter Your Patient Id</label>
                        <input onChange={this.handleInput} value={this.state.pId}
                            className='form-control'
                            name='pId' />
                        <button className='btn btn-info mt-2'>Generate Bill</button>
                    </div>
                </form>
                <div>
                    <div class="card" >
                        <div class="card-body">
                            <h5 class="card-title">Patient Bill</h5>
                            <h6 class="card-subtitle mb-2 text-muted"></h6>
                            <p class="card-text">{this.state.Bill}</p>
                            <button class="card-button" onClick={this.handlePdf}>Download PDF</button>
                        </div>
                    </div>
                    <div>
                        {this.state.msg}
                    </div>

                </div>


            </div>
        );
    }
}

export default GenerateBill;