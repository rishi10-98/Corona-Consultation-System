import axios from "axios";
class DepartmentService 
{

    baseUrl='http://localhost:8080/department'

    getAllDepartments(){
       return axios.get(`${this.baseUrl}/getDepartmentList`)
    }

}
export default new ServicesService()