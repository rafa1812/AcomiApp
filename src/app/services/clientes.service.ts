import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ClienteInterface } from '../interfaces/clientesInterface';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  headers = new HttpHeaders();
  constructor(
    private http: HttpClient,
  ) { 
    
    this.headers.append("Content-Type", "application/json");
    // this.headers.append("Authorization", "Bearer "+ localStorage.getItem("token"));
    this.headers.append("Authorization", "Bearer "+ this.getItemOnLocalStorage('token'));

  }
  getItemOnLocalStorage(key:string){
    return window.localStorage.getItem(key);
    }

  base = "https://api-test.acomi.coop/api";
  token = this.getItemOnLocalStorage('token');
  


  getClient(){
    return this.http.get(this.base+'/clientes',{headers: this.headers})
    .subscribe(cliente => {
      // this.cliente = cliente;
      console.log(cliente);
      // console.log(this.headers);
    
      //  const token = this.getItemOnLocalStorage('token');
      //  console.log(this.getItemOnLocalStorage);
      });
  }

  // GetClientes(){
  //   const path = 'https://api-test.acomi.coop/api/clientes';
  //   return this.http.get(path); 
  //   }

   


  
}
