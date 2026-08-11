import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-animal-info',
  imports: [IonicModule],
  templateUrl: './animal-info.component.html',
  styleUrls: ['./animal-info.component.scss'],
})
export class AnimalInfoComponent  implements OnInit {
   infoAnimal=    {
      uuid:'3123SADA',nombre:'Titan',Raza:'Braham',id:'AG-8821',peso:'580kg',foto:'linkedin',estado:'Produccion',
    } 
  constructor() { }

  ngOnInit() {}

}
