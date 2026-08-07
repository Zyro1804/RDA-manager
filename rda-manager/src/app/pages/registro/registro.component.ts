import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';
import { Regsitro } from 'src/app/services/regsitro';

@Component({
  selector: 'app-registro',
  standalone: true,
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  imports: [IonicModule, FormsModule],
})
export class RegistroComponent implements OnInit {
  usuario = '';
  password = '';
  confirmPassword = '';
  email = '';
  telefono = '';

  constructor(
    private registroService: Regsitro
  ) {}

  ngOnInit() {}

  async registrar() {
    const payload={
      usuario: this.usuario,
      password: this.password,
      confirmPassword: this.confirmPassword,
      email: this.email,
      telefono: this.telefono,
    }

    try{
      const resp= await firstValueFrom (this.registroService.crearNuevoUsuario(payload))
      console.log(resp)
    }catch(err:any){
      console.log(err)
    }
  }
}
