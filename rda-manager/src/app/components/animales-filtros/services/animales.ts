import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Animales {
  
  textoBusqueda = signal('');
  tipoSeleccionado = signal('');

}
