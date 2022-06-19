import React, { Component } from 'react';
import MedicineService from '../../service/MedicineService';
import Footer from '../Footer/Footer'

class AddMedicine extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            medName: '',
            medPrice: '',
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
        MedicineService.addMedicine(this.state.medName, this.state.medPrice)
            .then(response => {
                console.log(this.state)
                console.log(response.data)
                this.setState({
                    medName: '',
                    medPrice: '',
                    error: '',
                    msg: response.data
                })
            })
            .catch(e => {
                this.setState({
                    medName: '',
                    medPrice: '',
                    error: e.toString(),
                    msg: ''
                })
            })
    
    }
    
    render() {
        return (
            <div >
                <h3 className='text-primary'>Add Medicine</h3>
                <hr />
                <h4 className='text-success'>{this.state.msg && this.state.msg}</h4>
                <h4 className='text-danger'>{this.state.error && this.state.error}</h4>
    
                <form method='post' onSubmit={this.handleForm}>
                    <div className='form-group'>
                        <label>Medicine Name</label>
                        <input onChange={this.handleInput} value={this.state.medName}
                            className='form-control'
                            name='medName' />
                    </div>
                    <div className='form-group'>
                        <label>Medicine Price</label>
                        <input onChange={this.handleInput} value={this.state.medPrice}
                            className='form-control'
                            name='medPrice' />
                    </div>
                    <button className='btn btn-info mt-2'>Add</button>
                </form>
                <Footer></Footer>
            </div>
        )
    }
}

export default AddMedicine;


