import React, { Component } from 'react';
import axios from 'axios';

class MedicineService extends Component {
    baseUrl='http://localhost:8080/medicines'

addMedicine(medName,medPrice)
{
   return axios.post(`${this.baseUrl}/add`,{medName,medPrice})
}

getAllMedicines()
{
    return axios.get(`${this.baseUrl}/`)
}

deleteMedicine(medId)
{
  return axios.delete(`${this.baseUrl}/${medId}`)
 
}


}

export default new MedicineService();