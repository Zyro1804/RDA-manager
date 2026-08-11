import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { cartOutline, logOutOutline, peopleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-inicio',
  imports: [IonicModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent  implements OnInit {

  constructor() {

      addIcons({
        cartOutline, logOutOutline, peopleOutline
      })
   }

  ngOnInit() {}

}
