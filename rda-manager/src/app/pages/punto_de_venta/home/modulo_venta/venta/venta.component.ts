import { Component, OnInit } from '@angular/core';
import { Orden } from 'src/app/services/punto_de_venta/orden';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.scss'],
})
export class VentaComponent  implements OnInit {

  constructor(
    private readonly ordenService : Orden
  ) { }

  ngOnInit() {
    const itesm = this.ordenService.items
    console.log(itesm)
  }

}
