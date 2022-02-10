import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }



  // CLEINT *************************

  getClientsList(){
    return this.http.get('http://localhost:8080/clients/list');
  }

  addNewClient(data){
    return this.http.post('http://localhost:8080/clients/add',data);
  }


  // vehicules


  getVehiculesList(){
    return this.http.get('http://localhost:8080/vehicules/list');
  }


  addNewVehicule(data){
    return this.http.post('http://localhost:8080/vehicules/add',data);
  }


  findVehiculeById(id){
    
    return this.http.get('http://localhost:8080/vehicules/details/'+id);
  }



  addIntervention(data){
    return this.http.post('http://localhost:8080/interventions/add',data);
  }



  





}
