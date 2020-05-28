import { Component } from '@angular/core';
import { ClienteInterface } from '../interfaces/clientesInterface';
// import { HttpClient } from '@angular/common/http';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  cliente: ClienteInterface[] = [];

  
  constructor(
    // private http: HttpClient,
    private clientesService: ClientesService
  ) {}

  ngOnInit(){

    this.clientesService.getClient()
    // .subscribe(cliente => {
    // // this.cliente = cliente;
    // console.log(cliente);
  
    // //  const token = this.getItemOnLocalStorage('token');
    // //  console.log(this.getItemOnLocalStorage);
    // });
  }

  // getItemOnLocalStorage(key:string){
  //   return window.localStorage.getItem(key);
  //   console.log(key);
  //   }

    
}
