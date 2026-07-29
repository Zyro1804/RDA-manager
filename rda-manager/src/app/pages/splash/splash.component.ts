import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonCard, IonCardContent, IonCardTitle, IonicModule, IonImg } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonFooter } from '@ionic/angular/standalone';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
   imports: [IonicModule],
})
export class SplashComponent implements OnInit, OnDestroy {
  public progress = 0;
  private intervalId?: number;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.intervalId = window.setInterval(() => {
      this.progress = Math.min(1, this.progress + 0.01);
      if (this.progress >= 1) {
        window.clearInterval(this.intervalId);
        setTimeout(() => {
          this.router.navigateByUrl('/login');
        }, 400);
      }
    }, 50);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
    }
  }
}

