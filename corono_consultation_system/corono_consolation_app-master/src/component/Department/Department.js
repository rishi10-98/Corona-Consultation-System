import React, { Component } from 'react';
import DepartmentService from '../../service/DepartmentService';
import Footer from '../Footer'
class Department extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             department:[],
             error:'',
             msg:''
        }
    }
   componentDidMount()
    {
        this.getDepartmentList()
    }

    getDepartmentList(){
        DepartmentService.getDepartmentList()
        .then(response=>
            {
              this.setState(
                  {
                    department:response.data,
                      error:''
                    })
            })
        .catch(err=>
            {
                console.log(err)
                this.setState({
                    error:err.toString(),
                    department:[]
                })
            })
        }


    render() {
        return (
          this.state.department.length!==0 ?
        <div  className="container " >
          <div>
              <h3> All Department Details</h3>
              <span class="input-group">
  <input type="search" class="form-control rounded" placeholder="Search for departments" aria-label="Search"
    aria-describedby="search-addon" />
  <button type="button" class="btn btn-outline-primary">Search</button>
</span>
<hr></hr>
          </div>
<table style={{background:"linear-gradient(rgb(255 255 255) 2%, rgb(195 173 188) 135%)"} } class="table table-striped table-hover table-bordered table-responsive ">
  <thead class="table align-middle table-dark " style={{color:"gold"}}>
    <tr > 
      <th scope="col">Department ID</th>
      <th scope="col">Department Name</th>     
    </tr>
    
  </thead>
  <tbody>{
      this.state.department.map(department=>(
    <tr style={{color:"#0d1310"}}>
      <td>{department.departmentId}</td> 
      <td>{department.departmentName}</td>     
    </tr>

   )) 
      }
  </tbody>
</table>
        <Footer></Footer>
      </div>
      :
      <h4 className='text-danger'>No Record Available</h4>
        );
    }
}

export default Department;