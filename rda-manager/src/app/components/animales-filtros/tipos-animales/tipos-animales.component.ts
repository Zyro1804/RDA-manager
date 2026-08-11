import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

interface TipoAnimal {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-tipos-animales',
  imports: [IonicModule],
  templateUrl: './tipos-animales.component.html',
  styleUrls: ['./tipos-animales.component.scss'],
})
export class TiposAnimalesComponent  implements OnInit {
  @Input() tiposAnimales:TipoAnimal[] = [];

  
  constructor() { }

  ngOnInit() {}

  tipoSeleccionado: number | null = null;

  seleccionarTipo(id: number) {
    this.tipoSeleccionado = id;
  }

}
