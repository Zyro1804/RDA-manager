import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Login {
  
  // Cambia por tu URL
    private readonly apiUrl = environment.url;
    private readonly usuarioUrl=`${this.apiUrl}/user`
  

  constructor(private http: HttpClient) {}

  validarCorreo(email:string){
    return this.http.get(`${this.usuarioUrl}/email_validar/${email}`)
  }

  login(payload:any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, payload);
  }

}
