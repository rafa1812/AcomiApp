import { Component, OnInit, Inject } from '@angular/core';
import { UserServicesService } from '../services/user-services.service';
import { UserArray } from '../interfaces/userInterface';
import { AlertController } from '@ionic/angular';
// import { Storage } from '@ionic/storage'
import { AuthenticationService } from '../services/Authentication.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  user: UserArray[] = [];
  //  key: string = 'key';

  constructor(
    @Inject(Window) window: Window,    
    private userServicesService: UserServicesService,
    private alertCtrl: AlertController,
    private authService: AuthenticationService,
    private router: Router,

    // private storage: Storage

  ) { }

  ngOnInit() {
  }

  

  async openAlert(){
    const alert = await this.alertCtrl.create({
      header: 'Iniciar Sesión',
      inputs: [
        {
        name: 'usuario',//nombre del que enviare en el boton
        type: 'text',
        placeholder: 'Usuario'
        },
        {
          name: 'pass',//nombre del que enviare en el boton
          type: 'password',
          placeholder: 'Contraseña'
          },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secundary',
          handler:() => {
            console.log('confirm Cancel');
          }
        },{//cerramos y abrios para otro boton
          text: 'Iniciar sesión',
          handler:(data) =>{
           this.login(
             data.usuario,//envio data.usuario a la funcion login
             data.pass);

          }
        }
      ],

    });

    await alert.present();
  }

  login(usuario: string,pass: string){//recivo del openAlert
    const datos = {
     usuario,
     pass,
    };
    this.userServicesService.login(datos)
    .subscribe((newUser:any)=>{
      this.user.unshift(newUser);
      console.log(newUser);

     this.setItemOnLocalStorage('token', newUser.token);

     this.router.navigate(['/tabs/tab1']);
 })
  }

  setItemOnLocalStorage(key:string,value:string) {
    window.localStorage.setItem(key, value);
    }

    loginUser(){
      this.authService.login()
    }
  

}
