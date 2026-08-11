import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { archiveOutline, homeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  imports:[IonicModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  constructor() { 
    addIcons({
      homeOutline, archiveOutline
    })
  }

  ngOnInit() {}

}
