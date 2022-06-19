
import React, { Component } from 'react'
import {BrowserRouter as Router ,Route,Link, Switch} from 'react-router-dom'
// import CreateRegistration from './Login/CreateRegistration'
class UserNavbar extends Component {
  
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
              
                <Link class="navbar-brand" to="/userHome">Corona Consultation System</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                  <ul class="navbar-nav mb-2 ml-3 mb-lg-0">
                    <li class="nav-item">
                      <Link class="nav-link active" aria-current="page" to="/userHome">User Home</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link active" aria-current="page" to="/userAbout">About</Link>
                    </li> 

                    <li>  <Link class="nav-link active" aria-current="page" to="/displayDoctor">Doctor List</Link>   </li>

                  <li class="dropdown" >
                      <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      Options
                      </a>
                  <ul class="dropdown-menu "  aria-labelledby="navbarDropdown">
                        
                        <li><Link class="dropdown-item" to="/EditUserProfile">Edit Profile</Link></li>
                        <li><Link class="dropdown-item" to="/billUser">Bill of user</Link></li>
                        <li><Link class="dropdown-item" to="/Home" onClick={this.linkTarget}>Log Out</Link></li>
                        
                      </ul>
                      </li>
                        

              </ul>
              </div>
             </div>
            </nav>
            
          
        )
    }
}

export default UserNavbar;