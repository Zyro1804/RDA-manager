import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { arrowForwardOutline, bagHandleOutline, fileTrayFullOutline, refreshCircleOutline, trendingUpOutline } from 'ionicons/icons';
import { CarritoComponent } from 'src/app/components/punto_de_venta/carrito/carrito.component';
import { MasVendidosComponent } from 'src/app/components/punto_de_venta/mas-vendidos/mas-vendidos.component';
import { TransaccionesComponent } from 'src/app/components/punto_de_venta/transacciones/transacciones.component';

@Component({
  selector: 'app-inicio',
  imports: [IonicModule, MasVendidosComponent,TransaccionesComponent,CarritoComponent],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent  implements OnInit {

  hayItems=signal(false)
  constructor(
    private router :Router
  ) {
    addIcons({
      trendingUpOutline, refreshCircleOutline, fileTrayFullOutline, bagHandleOutline, arrowForwardOutline
    })
   }

  ngOnInit(
    
  ) {}

  fechaActual = new Date();
  fechaCorta = this.fechaActual.toLocaleDateString(undefined, {
  day: 'numeric',
  month: 'short'
});

  nuevaVenta(){
    this.router.navigate(['/punto_de_venta/home/inventario']);
  }

  agregarItems(event:any){
    console.log('Esta agregando 1')
    this.hayItems.set(true);
  }
}
