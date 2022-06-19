import React, { Component } from 'react'
<<<<<<< HEAD:src/component/PatientsOfDoctor/NavbarDoctor.jsx
import {Link} from 'react-router-dom'
class Navbar extends Component {
=======
import {BrowserRouter as Router ,Route,Link, Switch} from 'react-router-dom'
// import CreateRegistration from './Login/CreateRegistration'
class DoctorNavbar extends Component {
>>>>>>> 86ad3caab8bd3615681121bc42861a65262a9cba:src/component/PatientsOfDoctor/DoctorNavbar.jsx
    render() {
        return (
          
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
              <div class="container-fluid">
              
                <Link class="navbar-brand" to="">Corona Consultation System</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                  <ul class="navbar-nav mb-2 ml-3 mb-lg-0">
                    <li class="nav-item">
                      <Link class="nav-link active" aria-current="page" to="/Home">Doctor Home</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link active" aria-current="page" to="/About">About</Link>
                    </li> 
                    {/* <li class="nav-item">
                      <Link class="nav-link active" aria-current="page" to="/Doctor">Doctor</Link>
                    </li> */}
                    {/* <li class="nav-item">
                      <Link class="nav-link active" aria-current="page" to="/CreateRegistration">SignUp</Link>
                    </li> */}
                     <li class="nav-item">
                      <Link class="nav-link active" aria-current="page" to="/Contact">Contact</Link>
                    </li> 
                    {/* <li class="nav-item">
                      <Link class="nav-link active" aria-current="page" to="/Services">Service</Link>
                    </li> */}
                    {/* <li class="nav-item">
                      <Link class="nav-link active" aria-current="page" to="/userRegistration">Options</Link>
                    </li> */}
                    <li class="dropdown" style={{marginRight:'70px'}}>
                      <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      Options
                      </a>
                      <ul class="dropdown-menu "  aria-labelledby="navbarDropdown" >
                      <li><Link class="dropdown-item" to="/userLogin">Edit Profile</Link></li>
                      <li><Link class="dropdown-item" to="/doctorLogin">Logout</Link></li>
                      {/* <li><Link class="dropdown-item" to="/adminLogin">Admin</Link></li> */}
                      </ul>
                    </li>
          
                  </ul>
                </div>
              
              </div>
             
            </nav>
            
          
        )
    }
}

export default DoctorNavbar;