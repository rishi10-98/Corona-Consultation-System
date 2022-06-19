import axios from 'axios'
class InPatientService
{
    baseUrl='http://localhost:8080/api/inpatient'

   createInPatient(patientName,address,gender,doctorId)
   {
      return axios.post(`${this.baseUrl}/add`,{patientName,address,gender,doctorId})
   }

   getAllInPatient()
   {
       return axios.get(`${this.baseUrl}/AllInPatients`)
   }

   deleteInPatient(patientId)
   {
     return axios.delete(`${this.baseUrl}/${patientId}`)
    
   }

}

export default new InPatientService()