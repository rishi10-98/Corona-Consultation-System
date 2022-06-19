import axios from 'axios'
class RegistrationService
{
    baseUrl='http://localhost:8080/registration'

   createRegistration(patientFirstName,patientLastName,patientEmail,patientMobNo,patientPassward,gender,userType,bloodGroup)
   {
     console.log(patientFirstName+','+patientLastName+','+patientEmail+','+patientMobNo+','+patientPassward+','+gender+','+userType+','+bloodGroup)
      return axios.post(`${this.baseUrl}/saveRegistration`,{patientFirstName,patientLastName,patientEmail,patientMobNo,patientPassward,gender,userType,bloodGroup})
   }

   getAllDetails()
   {
       return axios.get(`${this.baseUrl}/getAllDetails`)
   }

   deletePatient(patientId)
   {
     return axios.delete(`${this.baseUrl}/delete/${patientId}`)
   }
   updateDetails(patientId)
   {
     return axios.put(`${this.baseUrl}/${patientId}`)
   }
}

export default new RegistrationService()