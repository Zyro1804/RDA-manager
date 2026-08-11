import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { chevronForwardCircle, chevronForwardCircleOutline, chevronForwardOutline } from 'ionicons/icons';

interface Animal {
  uuid:string,nombre:string,Raza:string,id:string,peso:string,foto:string,estado:string
}
@Component({
  selector: 'app-card-animales',
  imports: [IonicModule],
  templateUrl: './card-animales.component.html',
  styleUrls: ['./card-animales.component.scss'],
})
export class CardAnimalesComponent  implements OnInit {

  @Input() animales:any;
  @Input() cargando = false;
  constructor(
    private readonly router : Router
  ) {

    addIcons({
      chevronForwardOutline
   })
  }

  ngOnInit() {
  }
  verAnimal(uuid:string){
     this.router.navigate(['/home/animales', uuid]);
  }
}
