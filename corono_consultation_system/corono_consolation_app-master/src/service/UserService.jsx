class UserService extends Component {
    baseUrl='http://localhost:8080/registration/1'

saveRegistrationDetails(patientFirstName,patientLirstName,patientEmail,patientMobileNo,patientpassword,Genders)
{
   return axios.post(`${this.baseUrl}/add`,{patientFirstName,patientLirstName,patientEmail,patientMobileNo,patientpassword,Gender})
}

getDetailsById()
{
    return axios.get(`${this.baseUrl}/`)
}

updateDetails(pid)
{
  return axios.save(`${this.baseUrl}/${pid}`)
 
}


}

export default new UserService();