import axios from "axios";
import {SEARCH_DOCTOR_REQUEST,SEARCH_DOCTOR_SUCCESS,SEARCH_DOCTOR_FAILURE} from './SearchAction'

//search a Doctor

 //Action Creator
 const searchforDoctorRequest = () => {
    return {
      type: SEARCH_DOCTOR_REQUEST
    }
  }
  
  //Action Creator
  const searchforDoctorSuccess =sSDOCTOR => {
    return {
      type: SEARCH_DOCTOR_SUCCESS,
      payload:sSDOCTOR
    }
  }
  
  //Action Creator
  const searchforDoctorFailure = error => {
    return {
      type: SEARCH_DOCTOR_FAILURE,
      payload: error
    }
  }
  
  export const searchforDoctorAction = (name) => {
    return (dispatch)=>  {
      dispatch(searchforDoctorRequest())
      axios
        .get(`http://localhost:8080/doctor/doctorSearch/${name}`)
        .then(response => {
          // response.data is the users
          const sSDOCTOR= response.data
          dispatch(searchforDoctorSuccess(sSDOCTOR))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(searchforDoctorFailure(error?.response?.data))
        })
    }
  }