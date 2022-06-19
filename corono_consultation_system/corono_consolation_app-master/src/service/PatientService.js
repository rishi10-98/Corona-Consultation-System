import axios from "axios";
class PatientService 
{

    baseUrl='http://localhost:8080/patient'

    getAllPatient(){
       return axios.get(`${this.baseUrl}/getAllPatient`)
    }

}
export default new PatientService()