import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {
  @Input() size: string | number = 120;

  thema = environment.thema
  constructor() { }

  ngOnInit() {}

  get sizeCss(): string {
    return typeof this.size === 'number' ? `${this.size}px` : this.size;
  }
}

