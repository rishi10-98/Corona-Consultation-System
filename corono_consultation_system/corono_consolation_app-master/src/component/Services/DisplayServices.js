import React, { Component } from 'react';
import ServicesService from '../../service/ServicesService';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import Navbar from '../Navbar';
import AdminNavbar from '../PatientsOfDoctor/AdminNavbar';
class DisplayServices extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             service:[],
             error:'',
             msg:''
        }
    }
   componentDidMount()
    {
        this.getAllService()
    }

    getAllService(){
        ServicesService.getAllService()
        .then(response=>
            {
              this.setState(
                  {
                    service:response.data,
                      error:''
                    })
            })
        .catch(err=>
            {
                console.log(err)
                this.setState({
                    error:err.toString(),
                    service:[]
                })
            })
        }

  deleteService = (serviceId) => {
    ServicesService.deleteService(serviceId)
      .then(response => {
        window.location.reload(true);
        this.setState({
          error: '',
          msg: response.data
        })
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
    this.getAllService()

  }


    render() {
        return (
          this.state.service.length!==0 ?

          <div>
            <AdminNavbar></AdminNavbar>
            
          <div>
            
        <div  className="container " >
          <div>
              <h3> All Service Details</h3>
              <span class="input-group">
  <input type="search" class="form-control rounded" placeholder="Search for services" aria-label="Search"
    aria-describedby="search-addon" />
  <button type="button" class="btn btn-outline-primary">Search</button>
</span>
<hr></hr>
          </div>
<MDBTable style={{background:"linear-gradient(rgb(255 255 255) 2%, rgb(var(--bs-blue) 135%))"} } class="table table-striped table-hover table-bordered table-responsive ">
  <MDBTableHead class="table align-middle table-dark " style={{color:"gold", background:"black"}}>
    <tr > 
      <th scope="col">Service ID</th>
      <th scope="col">Patient Name</th>
      <th scope="col">Ambulance Status</th>
      <th scope="col">Emergency Care</th>
      <th scope="col">Ventilator Number</th>
      <th scope="col">Emergency Cost</th>
      <th scope="col">Ventilator Cost</th>
      <th>Actions</th>
      
      
    </tr>
    
  </MDBTableHead>
  <MDBTableBody>{
      this.state.service.map(service=>(
       <tr >
      <td>{service.serviceId}</td>
      <td>{service.patientName}</td>
      <td>{service.ambulanceStatus}</td> 
      <td>{service.emergencyCare}</td>
      <td>{service.ventilatorsNo}</td>
      <td>{service.serviceReport.emergencyExtraCost}</td>
      <td>{service.serviceReport.ventilatorCost}</td>
     <td> <button onClick={() => this.deleteService(service.serviceId)} className='btn btn-danger'>Delete</button></td>
    </tr>

   )) 
      }
  </MDBTableBody>
</MDBTable>
</div>
      </div>
      </div>
      :
      <h4 className='text-danger'>No Record Available</h4>
        );
    }
}

export default DisplayServices;