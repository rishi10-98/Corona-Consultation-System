
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from 'react-router-dom'
import About from './component/AboutUs/AboutUs'
import DoctorSearch from "./component/doctor/DoctorSearch";
import UserLogin from "./component/Login/UserLogin";
import createRegistration from "./component/Login/CreateRegistration";
import AllDoctor from "./component/AllDoctor";
import DoctorDisplay from "./component/doctor/DoctorDisplay";
import DisplayServices from "./component/Services/DisplayServices";
import DoctorLogin from "./component/Login/DoctorLogin";
import AdminLogin from "./component/Login/AdminLogin";
import ContactUs from "./component/ContactUs";
<<<<<<< HEAD
import UpdateUser from "./component/Login/UpdateUser";
import Footer from "./component/Footer/Footer";
import DoctorHome from "./component/PatientsOfDoctor/DoctorHome";
=======
import UserLoginAction from "./component/Login/UserLoginAction";
import DoctorList from "./component/doctor/DoctorList";
import DoctorHome from "./component/PatientsOfDoctor/DoctorHome";
import DoctorAboutUs from "./component/AboutUs/DoctorAboutUs";
import AllPatients from "./component/AllPatients";
import DisplayPatients from "./component/PatientsOfDoctor/DisplayPatietnts";
import CreateRegistration from "./component/Login/CreateRegistration";
import DoctorRegistration from "./component/Login/DoctorRegistration";
import UserHome from "./component/PatientsOfDoctor/UserHome";
import EditDoctorProfile from "./component/PatientsOfDoctor/EditDoctorProfile";
import UserAboutUs from "./component/AboutUs/UserAboutUs";
import GenerateBill from "./component/GenerateBill";
import UpdateUser from "./component/Login/UpdateUser";
import AdminHome from "./component/PatientsOfDoctor/AdminHome";
import AllAdminDoctorList from "./component/doctor/AllAdminDoctorList";
import Department from "./component/Department/Department";
import AddMedicine from "./component/Medicine/AddMedicine";

>>>>>>> e7a2400eac7932e32bc375ebc5b927657f6c118d

//import Navbar from "./Navbar";
function App() {



  return (
    <div className="App">

      <Router >
        <Switch className="container">
<<<<<<< HEAD
          <Route path="/doctordearch">
            <DoctorSearch />
          </Route>
=======

>>>>>>> e7a2400eac7932e32bc375ebc5b927657f6c118d
          <Route exact path="/userLogin" component={withRouter(UserLogin)} />
          <Route path="/CreateRegistration" component={withRouter(createRegistration)} />
          <Route path="/UserRegistration" component={withRouter(createRegistration)} />
          <Route path="/AllDoctor" component={withRouter(AllDoctor)}></Route>
<<<<<<< HEAD
          <Route  path="/Doctor" component={withRouter(DoctorDisplay )} />
          <Route  path="/Services" component={withRouter(DisplayServices)} />
          <Route  path="/doctorLogin" component={withRouter(DoctorLogin)} />
          <Route  path="/adminLogin" component={withRouter(AdminLogin)} />
          <Route  path="/updateUser" component={withRouter(UpdateUser)} />
          <Route  path="/Home" component={withRouter(Home)} />
          <Route  path="/Contact" component={withRouter(ContactUs)} />
          <Route  path="/About" component={withRouter(About)} />

          <Route  exact path="/" component={withRouter(Home)} />
          <Route path="*"> <h3>404 Page not found</h3></Route>
        </Switch>
      </Router>
      
=======
          <Route path="/Doctor" component={withRouter(DoctorDisplay)} />
          <Route path="/doctorLogin" component={withRouter(DoctorLogin)} />
          <Route path="/doctorSearch" component={withRouter(DoctorSearch)}   ></Route>
          <Route path="/Home" component={withRouter(Home)} />
          <Route path="/Contact" component={withRouter(ContactUs)} />
          <Route path="/About" component={withRouter(About)} />
          <Route path="/adminLogin" component={withRouter(AdminLogin)}></Route>
          <Route path="/userlogin" component={withRouter(UserLogin)}></Route>
          <Route path="/userLoginAction" component={withRouter(UserLoginAction)}></Route>
          <Route path="/DoctorList" component={withRouter(DoctorList)}></Route>
          <Route path="/DoctorHome" component={withRouter(DoctorHome)}></Route>
          <Route path="/DoctorAbout" component={withRouter(DoctorAboutUs)}></Route>
          <Route path="/displayPatient" component={withRouter(DisplayPatients)}></Route>
          <Route path="/userHome" component={withRouter(UserHome)}></Route>
          <Route path="/userAbout" component={withRouter(UserAboutUs)}></Route>
          <Route path="/displayDoctor" component={withRouter(AllDoctor)}></Route>
          <Route path="/billUser" component={withRouter(GenerateBill)}></Route>
          <Route path="/EditUserProfile" component={withRouter(UpdateUser)}></Route>
           <Route path="/adminHome" component={withRouter(AdminHome)} ></Route>   
           <Route path="/allAdminDoctorList"   component={withRouter(AllAdminDoctorList)}></Route>
         <Route path="/displayServices" component={withRouter(DisplayServices)}></Route>
          <Route path="/department" component={withRouter(Department)}></Route>
          <Route path="/allMedicineList" component={withRouter(AddMedicine)}></Route>

          <Route exact path="/" component={withRouter(Home)}/>
          <Route path="*"> <h3>404 Page not found</h3></Route>


        </Switch>
      </Router>



>>>>>>> e7a2400eac7932e32bc375ebc5b927657f6c118d
    </div>
  );
}

export default App;
