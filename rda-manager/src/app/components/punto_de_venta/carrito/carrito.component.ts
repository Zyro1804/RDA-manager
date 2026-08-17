import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { arrowForwardCircle, arrowForwardOutline, cartOutline } from 'ionicons/icons';
import { Orden } from 'src/app/services/punto_de_venta/orden';

@Component({
  selector: 'app-carrito',
  imports:[IonicModule],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
})
export class CarritoComponent  implements OnInit {

  constructor(
    private readonly ordenService : Orden,
    private readonly router : Router
  ) { 
    addIcons ({
      cartOutline, arrowForwardOutline
    })
   }
   items = 3;
    total = "1,250.00";
  ngOnInit() {}

  guardarItems(){
    const items=[
      {
        uuid:"123123",
        nombre:"Hola",
        cantidad:"2",
      }
    ]
    this.ordenService.guardarItemsSeleccionados(items)
     this.router.navigate(['punto_de_venta/home/modulo_venta/venta']);

  }
}
