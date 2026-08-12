import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-transacciones',
  imports:[IonicModule,DecimalPipe],
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.scss'],
})
export class TransaccionesComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  transacciones = [
  {
    id: 4092,
    hora: '10:45 AM',
    metodoPago: 'Efectivo',
    monto: 1250
  },
  {
    id: 4091,
    hora: '09:30 AM',
    metodoPago: 'Tarjeta',
    monto: 4800
  },
  {
    id: 4090,
    hora: '08:15 AM',
    metodoPago: 'Transferencia',
    monto: 12500
  }
];
}
