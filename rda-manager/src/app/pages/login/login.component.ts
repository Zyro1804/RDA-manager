import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LogoComponent } from '../../components/logo/logo.component';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [IonicModule, LogoComponent],
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
