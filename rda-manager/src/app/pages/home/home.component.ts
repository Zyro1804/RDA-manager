import { Component, OnInit, signal } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { analyticsOutline, carOutline, cashOutline, homeOutline, library, pawOutline, personCircle, playCircle, radio, readerOutline, search } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  imports: [IonicModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  constructor() {
     addIcons({ homeOutline, personCircle, pawOutline, analyticsOutline, readerOutline, cashOutline});
   }
   tabSeleccionado= signal<string>('home')

   cambiarTab(tab:any){
    console.log(tab)
    this.tabSeleccionado.set(tab)
    // this.tabRuta.emit(this.tabSeleccionado())
   }

  ngOnInit() {}

  

}

