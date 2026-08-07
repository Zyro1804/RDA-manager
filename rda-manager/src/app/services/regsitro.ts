import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Regsitro {
    
  // Cambia por tu URL
  private readonly apiUrl = environment.url;
  private readonly crearUrl=`${this.apiUrl}user/crear_usuario`

  constructor(private http: HttpClient) {}

  crearNuevoUsuario(payload: any): |Observable<any> {
    const body={
      name:payload.usuario,
      email:payload.email,
      numero_telefono:payload.telefono,
      password: payload.password,
      isActive:true
    }
    return this.http.post(this.crearUrl,body);
  }

}
