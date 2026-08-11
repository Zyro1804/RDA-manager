import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RefresherCustomEvent } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { BarraBusquedaComponent } from 'src/app/components/animales-filtros/barra-busqueda/barra-busqueda.component';
import { CardAnimalesComponent } from 'src/app/components/animales-filtros/card-animales/card-animales.component';
import { Animales } from 'src/app/components/animales-filtros/services/animales';
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
  cargando=false;
  tiposAnimales=[
    {id:1,nombre:'Vaca'},
    {id:2,nombre:'Caballos'},
    {id:3,nombre:'Potros'},
  ]

  animales=[
    {
      uuid:'3123SADA',nombre:'Titan',Raza:'Braham',id:'AG-8821',peso:'580kg',foto:'linkedin',estado:'Produccion',
    },
    {
      uuid:'3222bsbs',nombre:'Pepito',Raza:'Braham',id:'AG-8822',peso:'580kg',foto:'linkedin',estado:'Enfermo',

    }
  ]
  constructor(
    private readonly animalesService : Animales
  ) {
      addIcons({ add });
   }

  ngOnInit() {
  }

  buscarAnimal(event:any){
    console.log(event)
    this.animalesService.textoBusqueda.set(event)
  }

 handleRefresh(event: RefresherCustomEvent) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }
}
