import axios from "axios";
class ServicesService 
{

    baseUrl='http://localhost:8080/service1'

    getAllService(){
       return axios.get(`${this.baseUrl}/getAll`)
    }

    deleteService(serviceId) {
        return axios.delete(`${this.baseUrl}/${serviceId}`)

    }

    saveServices(ventilatorsNo, ambulanceStatus, emergencyCare, emergencyExtraCost, ventilatorCost) {
        return axios.post(`${this.baseUrl}/saveService`, { ventilatorsNo, ambulanceStatus, emergencyCare, emergencyExtraCost, ventilatorCost })
    }

}
export default new ServicesService()