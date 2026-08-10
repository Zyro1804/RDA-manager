import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { BarraBusquedaComponent } from 'src/app/components/animales-filtros/barra-busqueda/barra-busqueda.component';

@Component({
  selector: 'app-animales',
  imports : [IonicModule,RouterLink,BarraBusquedaComponent],
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.scss'],
})
export class AnimalesComponent  implements OnInit {

  typeButtonSearchBar:string='always'
  placeHolderText:string='Buscar por ID o Nombre'
  constructor() {

      addIcons({ add });
   }

  ngOnInit() {}

  buscarAnimal(event:any){
    console.log(event)
  }

}
