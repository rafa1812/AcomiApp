import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserArray } from '../interfaces/userInterface';
import { ClienteInterface } from '../interfaces/clientesInterface';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(
    private http: HttpClient
  ) { }


  login(usuario:UserArray){
    const path = 'https://api-test.acomi.coop/auth';
  return this.http.post(path,usuario);
  }

  // GetClientes(){
  //   const path = 'https://api-test.acomi.coop/api/clientes';
  //   return this.http.get<ClienteInterface[]>(path); 
  //   }

  

}
