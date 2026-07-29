import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Login {
  
  // Cambia por tu URL
  private readonly apiUrl = 'https://tu-api.com/api/auth';

  constructor(private http: HttpClient) {}

  login(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, {
      email
    });
  }

}
