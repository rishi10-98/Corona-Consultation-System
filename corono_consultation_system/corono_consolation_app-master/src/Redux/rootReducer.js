import { combineReducers } from 'redux' 
import { searchDoctorReducer } from './DoctorSearch/DoctorReducer';
const rootReducer = combineReducers({
    searchD: searchDoctorReducer

});
export default rootReducer