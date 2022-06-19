
import React, { Component } from 'react'
import {BrowserRouter as Router ,Route,Link, Switch} from 'react-router-dom'
// import CreateRegistration from './Login/CreateRegistration'
class AdminNavbar extends Component {
  
  constructor(props) {
    super(props);
    
  }
  
  
  
    render() {
      const linkTarget = {
        pathname: "/page"
      }
        return (
          
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
              <div class="container-fluid">
              
                <Link class="navbar-brand" to="/adminHome">Corona Consultation System</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                  <ul class="navbar-nav mb-2 ml-3 mb-lg-0">
                    <li class="nav-item">
                      <Link class="nav-link active" aria-current="page" to="/adminHome">Admin Home</Link>
                    </li>
                   

                    <li class="dropdown" >
                      <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      Options
                      </a>
                      
                      <ul class="dropdown-menu "  aria-labelledby="navbarDropdown">
                        
                        <li><Link class="dropdown-item" to="/allAdminDoctorList">Doctor List</Link></li>
                        <li><Link class="dropdown-item" to="/displayServices">Services List</Link></li>
                        <li><Link class="dropdown-item" to="/department">department</Link></li>
                        <li><Link class="dropdown-item" to="/allMedicineList">Medicine</Link></li>
                      </ul>
                      </li>

        
                        <li><Link class="dropdown-item" to="/Home" onClick={this.linkTarget}>Log Out</Link></li>
                        

              </ul>
              </div>
             </div>
            </nav>
            
          
        )
    }
}

export default AdminNavbar;