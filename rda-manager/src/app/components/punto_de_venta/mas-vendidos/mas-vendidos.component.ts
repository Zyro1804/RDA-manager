import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { addOutline } from 'ionicons/icons';

@Component({
  selector: 'app-mas-vendidos',
  imports:[IonicModule],
  templateUrl: './mas-vendidos.component.html',
  styleUrls: ['./mas-vendidos.component.scss'],
})
export class MasVendidosComponent  implements OnInit {

  constructor() {
    addIcons({
      addOutline
    })
   }

  ngOnInit() {}
  productos = [
  {
    id: 1,
    nombre: 'Leche Entera',
    categoria: 'Bidón',
    peso: 20,
    unidad: 'L',
    stock: 15,
    imagen: 'assets/images/leche.jpg'
  },
  {
    id: 2,
    nombre: 'Alimento para ganado',
    categoria: 'Saco',
    peso: 25,
    unidad: 'kg',
    stock: 8,
    imagen: 'assets/images/alimento.jpg'
  },
  {
    id: 3,
    nombre: 'Queso Fresco',
    categoria: 'Producto',
    peso: 500,
    unidad: 'g',
    stock: 24,
    imagen: 'assets/images/queso.jpg'
  }
];
}
