import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { BarraBusquedaComponent } from 'src/app/components/animales-filtros/barra-busqueda/barra-busqueda.component';
import { CardAnimalesComponent } from 'src/app/components/animales-filtros/card-animales/card-animales.component';
import { TiposAnimalesComponent } from 'src/app/components/animales-filtros/tipos-animales/tipos-animales.component';

@Component({
  selector: 'app-animales',
  imports : [IonicModule,RouterLink,BarraBusquedaComponent, TiposAnimalesComponent, CardAnimalesComponent],
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.scss'],
})
export class AnimalesComponent  implements OnInit {

  typeButtonSearchBar:string='always'
  placeHolderText:string='Buscar por ID o Nombre'

  tiposAnimales=[
    {id:1,nombre:'Vaca'},
    {id:2,nombre:'Caballos'},
    {id:3,nombre:'Potros'},
  ]
  constructor() {

      addIcons({ add });
   }

  ngOnInit() {}

  buscarAnimal(event:any){
    console.log(event)
  }

}
