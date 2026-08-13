import { DecimalPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { add, remove } from 'ionicons/icons';

export interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  stock: number;
  imagen: string;
}
@Component({
  selector: 'app-card-producto',
  imports: [IonicModule, DecimalPipe],
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.scss'],
})



export class CardProductoComponent  implements OnInit {


  ngOnInit() {}

  @Input() producto!: Producto;

  @Input() cantidad: number = 0;

  @Output() cantidadChange = new EventEmitter<number>();

  constructor() {
    addIcons({
      add,
      remove
    });
  }

  aumentar() {
    if (this.cantidad < this.producto.stock) {
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }
  }

  disminuir() {
    if (this.cantidad > 0) {
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }
}
