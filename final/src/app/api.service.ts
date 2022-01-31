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
}
