import React, { Component } from 'react'
import {Link,BrowserRouter as Router} from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (

          <div>
           
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">        
            

              <div class="container-fluid">
                <Link class="navbar-brand" to="">Corona Consultation System</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                  <ul class="navbar-nav mb-2 ml-3 mb-lg-0">
                    <li class="nav-item">
                      <Link class="nav-link active" aria-current="page" to="/Home">Home</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link active" aria-current="page" to="/About">About</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link active" aria-current="page" to="/Doctor">Doctor</Link>
                    </li>
                    
                    <li class="nav-item">
                      <Link class="nav-link active" aria-current="page" to="/Contact">Contact</Link>
                    </li>
                                      

                    <li class="dropdown" style={{marginRight:'70px'}}>
                      <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      Login
                      </a>
                      <ul class="dropdown-menu "  aria-labelledby="navbarDropdown" >
                      <li><Link class="dropdown-item" to="/userLogin">User</Link></li>
                      <li><Link class="dropdown-item" to="/doctorLogin">Doctor</Link></li>
                      <li><Link class="dropdown-item" to="/adminLogin">Admin</Link></li>
                      </ul>
                    </li>
                   

                  </ul>
                </div>
              </div>
            </nav>
            <div className='container mt-2  '>
           
              
            </div>
       
            </div>
        )
    }
}

export default Navbar