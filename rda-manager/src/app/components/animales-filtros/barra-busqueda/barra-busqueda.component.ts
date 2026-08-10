import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-barra-busqueda',
  imports:[IonicModule],
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.scss'],
})
export class BarraBusquedaComponent  implements OnInit {
  @Input() value!:any;
  @Input() typeButtonClear!:any;
  @Input() placeHolderText!:any
  @Output() valueChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(
  ) {}

  buscar(event:any){
    this.valueChange.emit(event)
  }

}
