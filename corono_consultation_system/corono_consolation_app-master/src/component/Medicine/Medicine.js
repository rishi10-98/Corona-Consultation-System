import React, { Component } from 'react';
import axios from 'axios';
import MedicineService from '../../service/MedicineService';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import AddMedicine from '../Medicine/AddMedicine'
import Footer from '../Footer/Footer'


class Medicine extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Medicines: [],
            error: '',
            msg: ''
        }
    }


    componentDidMount() {
        this.getAllMedicines()
    }

    getAllMedicines() {
        MedicineService.getAllMedicines()
            .then(response => {
                this.setState(
                    {
                        Medicines: response.data,
                        error: ''
                    })
            })
            .catch(err => {
                console.log(err)
                this.setState({
                    error: err.toString(),
                    Medicines: []
                })
            })
    }

    deleteMedicine = (medId) => {
        MedicineService.deleteMedicine(medId)
            .then(response => {
                this.setState({
                    error: '',
                    msg: response.data
                })
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
        this.getAllMedicines()

    }

    render() {
        return (




            this.state.Medicines.length != 0 ?
                <div>

                    <h3>All Medicines</h3>

                    <hr />
                    <table className='table table-bordered table-hover table-striped'>
                        <thead className='bg-dark' style={{ color: "gold" }}>
                            <tr>
                                <th>Medicine ID</th>
                                <th>Medicine Name</th>
                                <th>Medicine Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.Medicines.map(medicine => (
                                    <tr>
                                        <td>{medicine.medId}</td>
                                        <td>{medicine.medName}</td>
                                        <td>{medicine.medPrice}</td>
                                        <td>
                                            <button onClick={() => this.deleteMedicine(medicine.medId)} className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <Router>
                        <h4 className='text-danger'>No Medicines Available</h4>
                        <Link className='btn btn-primary' to="/AddMedicine">Add Medicine</Link>
                        <Route exact path="/AddMedicine" component={AddMedicine} />
                    </Router>

                            <Footer></Footer>
                </div>
                :
                <div>
                    <Router>
                        <h4 className='text-danger'>No Medicines Available</h4>
                        <Link className='btn btn-primary' to="/AddMedicine">Add Medicine</Link>
                        <Route exact path="/AddMedicine" component={AddMedicine} />
                    </Router>
                </div>
        )
    }
}

export default Medicine;

