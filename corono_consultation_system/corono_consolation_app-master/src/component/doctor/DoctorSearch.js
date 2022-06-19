import { useEffect ,useState} from 'react'
import { connect } from 'react-redux'
import {BrowserRouter as Router ,Route,Link, Switch } from 'react-router-dom'
import { useHistory } from 'react-router'
import { searchforDoctorAction } from '../../Redux/DoctorSearch/SearchActionCreate'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import './doctor.css'
import UserLogin from '../Login/UserLogin';

import Footer from '../Footer/Footer'
import Navbar from '../Navbar';
function DoctorSearch({ searchDoctor, searchforDoctorAction, credentials }) {
     
    const history=useHistory()

 function handleLogin(){
     if(this.props.message =="success"){
         history.push({
             pathname:'/Home'
         })
     }
     else{
        history.push({
            pathname:'/userLogin'
        })

     }
 }


  
    useEffect(() => {

        searchforDoctorAction(credentials.name)
    }
        , [credentials])

    return searchDoctor.loading ? (

        <></>
    ) : searchDoctor.error ? (
        <div className="alert alert-danger" role="alert">{searchDoctor.error} </div>
    ) : (

        searchDoctor.sSDoctor.length!=0 ?
       <div>
       
        <div className="container"> 
            <div>
                <h3> Search Doctor </h3>
                <hr></hr>
            </div>

            <MDBTable style={{ background: "linear-gradient(rgb(255 255 255) 2%, rgb(195 173 188) 135%)" }} class="table table-striped table-hover table-bordered table-responsive ">
                <MDBTableHead class="table align-middle table-dark " style={{ color: "gold",background: 'black' }}>
                    <tr style={{width:'100%'}} >
                        <th scope="col">Doctor Name</th>
                        <th scope="col">Doctor Department</th>
                        <th scope="col">Doctor Email</th>
                        <th scope="col">Doctor Degree</th>
                        <th scope="col">Doctor Date</th>
                        <th scope="col">Doctor Experience</th>
                        <th scope="col">Operation</th>
                    </tr>

                </MDBTableHead>
                <MDBTableBody>{
                    searchDoctor.sSDoctor.map(doc => (
                        <tr style={{ color: "#0d1310",width:'100%' }}>
                            <td>{doc.docName}</td>
                            <td>{doc.docPhone}</td>
                            <td>{doc.docMail}</td>
                            <td>{doc.docDegree}</td>
                            <td>{doc.docDate}</td>
                            <td>{doc.docExpeience}</td>
                            <td><Link exact to="/userLoginAction"   className="btn btn-primary">Book Appointment</Link></td>
                        </tr>

                    ))
                }
                </MDBTableBody>
            </MDBTable>

            <Footer></Footer>
            </div>
        </div>
         :
         <h4 className='text-danger'>No Doctor Available</h4>
        
    )
}
const mapStateToProps = (state, props) => {
    return {
        credentials: props.cred,
        searchDoctor: state.searchD
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        searchforDoctorAction: () => dispatch(searchforDoctorAction(props.cred.name))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DoctorSearch)
