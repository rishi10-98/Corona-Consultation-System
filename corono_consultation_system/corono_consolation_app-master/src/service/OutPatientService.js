import axios from 'axios'
class OutPatientService
{
    baseUrl='http://localhost:8080/patient'

   getPatientBill(pId)
   {
     return axios.get(`${this.baseUrl}/bill/${pId}`)
    
   }

   getBillPdf(details)
   {
     return axios.post(`${this.baseUrl}/bill/pdf/${details}`)
   }

}

export default new OutPatientService()