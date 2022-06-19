import axios from "axios";
class DoctorService 
{

    baseUrl='http://localhost:8080/doctor'

    getAllDoctor(){
        return axios.get(`${this.baseUrl}/allDoctor`)
    }

}
export default new DoctorService()