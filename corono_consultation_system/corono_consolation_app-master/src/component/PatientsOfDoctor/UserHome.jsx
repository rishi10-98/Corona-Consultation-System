import { Component } from 'react'
import Footer from "../Footer/Footer";
import '../Home/HomeCss.css';
import UserNavbar from './UserNavbar';
class UserHome extends Component {
    render(){
        return (
            <div>
                <UserNavbar></UserNavbar>
                <div className="container-fluid">
                    <div class="image-home-banner" style={{ width: '100%' }} >
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6">
                                    <h1 class="display-9"> Hello User</h1>
                                    <p class="lead">You are Logged In !!</p>
                                    <h4 class="display-8">This is your profile page. You can see the progress you've made with your work and manage your assigned tasks</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <Footer></Footer>
            </div>
        );
    }
}

export default UserHome;