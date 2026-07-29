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

    await loading.present();

    try {
      // Simula una petición al servidor
      await new Promise(resolve => setTimeout(resolve, 2000));
      this.correoValid.set(true)
    } finally {
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
    console.log(payload)
    await loading.present();
    try {
      const resp= await firstValueFrom(this.loginService.login('') )
    }catch(err){
      console.log(err)
      this.alert.set(true);
      this.alertMensaje='Credencial Invalida'
    } finally {
      await loading.dismiss();
    }
  }
}
