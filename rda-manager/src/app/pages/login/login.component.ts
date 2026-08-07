import { Component, inject, OnInit, signal } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LogoComponent } from '../../components/logo/logo.component';
import { LoadingController } from '@ionic/angular/standalone';
import { firstValueFrom } from 'rxjs';
import { Login } from 'src/app/services/login';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import {
  arrowForwardOutline,
  logIn
} from 'ionicons/icons';


@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [IonicModule, LogoComponent, FormsModule],
})
export class LoginComponent implements OnInit {

  correoValid=signal(false);
  alert=signal(false)
  alertMensaje = '';
  headerMensaje=''
  correo = '';
  password = '';
  alertButtons = [
    {
      text: 'Aceptar',
      role: 'cancel'
    }
  ];
  constructor(
    private loadingController: LoadingController,
    private loginService: Login
  ) { 
    addIcons({
      arrowForwardOutline,
      logIn
    });
  }

  ngOnInit() {}

  async checarCorreo() {
    const loading = await this.loadingController.create({
      message: 'Verificando correo...',
    });
    this.alert.set(false)
    await loading.present();

    try {
      const resp = await firstValueFrom(this.loginService.validarCorreo( this.correo))
       await loading.dismiss();
      this.correoValid.set(true)
  
    } catch(err:any) {
      console.log(err)
      this.alert.set(true);
      this.headerMensaje='Ingreso invalido'
      this.alertMensaje = err?.error?.message || 'Credencial inválida';
      
    } finally{
      await loading.dismiss();
    }
  }

  async iniciarSesion(){
        const loading = await this.loadingController.create({
        message: 'Ingresando al sistema...',
    });
    const payload={
      email: this.correo,
      password: this.password
    }
    this.alert.set(false)
    await loading.present();
    try {
      const resp= await firstValueFrom(this.loginService.login(payload) )
      console.log(resp)
    }catch(err:any){
      console.log(err)
      this.alert.set(true);
      this.headerMensaje='Ingreso invalido'
       this.alertMensaje = err?.error?.message || 'Credencial inválida';
    } finally {
      await loading.dismiss();
    }
  }
}
