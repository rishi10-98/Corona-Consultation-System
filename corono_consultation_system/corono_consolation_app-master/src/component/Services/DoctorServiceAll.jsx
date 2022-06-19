import axios from 'axios'
class DoctorServiceAll
{
    baseUrl='http://localhost:8080/doctor'

   createRegistration(docName,userName,docPhone,gender,docMail,password,userType,docDegree,docExperience,docDate)
    {
       return axios.post(`${this.baseUrl}/saveDoctor`,{docName,userName,docPhone,gender,docMail,password,userType,docDegree,docExperience,docDate})
    }
   getDoctorById(docId)
   {
       return axios.get(`${this.baseUrl}/${docId}`)
   }
   getAllDoctor()
   {
       return axios.get(`${this.baseUrl}/allDoctor`)
   }

   deleteDoctor(docId)
   {
     return axios.delete(`${this.baseUrl}/delete/${docId}`)
   }
   updateDetails(docId)
   {
     return axios.put(`${this.baseUrl}/${docId}`)
   }

}

export default new DoctorServiceAll()