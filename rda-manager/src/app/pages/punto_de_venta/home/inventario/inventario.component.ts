import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { BarraBusquedaComponent } from 'src/app/components/animales-filtros/barra-busqueda/barra-busqueda.component';
import { CardProductoComponent } from 'src/app/components/punto_de_venta/card-producto/card-producto.component';

@Component({
  selector: 'app-inventario',
  imports:[IonicModule, BarraBusquedaComponent,RouterLink, CardProductoComponent],
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss'],
})
export class InventarioComponent  implements OnInit {

  typeButtonSearchBar:string='always'
  placeHolderText:string='Buscar productos por ID, Nombre o Codigo'
  constructor(
  ) { 
    addIcons({
      add
    })
  }
  productos = [
  {
    id: 1,
    nombre: 'Vacuna Triple Bovina 50 Dosis',
    categoria: 'Veterinaria',
    precio: 450,
    stock: 120,
    imagen: 'assets/images/vacuna.jpg'
  },
  {
    id: 2,
    nombre: 'Alimento Ganadero Premium',
    categoria: 'Alimento',
    precio: 580,
    stock: 35,
    imagen: 'assets/images/alimento.jpg'
  },
  {
    id: 3,
    nombre: 'Desparasitante Bovino',
    categoria: 'Veterinaria',
    precio: 320,
    stock: 18,
    imagen: 'assets/images/desparasitante.jpg'
  }
];

  ngOnInit() {}

  buscarProducto(event:any){

  }

}
