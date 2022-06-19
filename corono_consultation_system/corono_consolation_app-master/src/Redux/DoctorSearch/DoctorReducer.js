import {SEARCH_DOCTOR_REQUEST,SEARCH_DOCTOR_SUCCESS,SEARCH_DOCTOR_FAILURE} from './SearchAction'

const searchDoctor = {
    loading: false,
    sSDoctor: [],
    error: ''
  }

  export const searchDoctorReducer = (state = searchDoctor, action) => {
    switch (action.type) {
      case SEARCH_DOCTOR_REQUEST:
        return {
          ...state,
          loading: true
        }
      case SEARCH_DOCTOR_SUCCESS:
        return {
          loading: false,
          sSDoctor: action.payload,
          error: ''
        }
      case SEARCH_DOCTOR_FAILURE:
        return {
          loading: false,
          sSDoctor: [],
          error: action.payload
        }
      default: return state
    }  
  }