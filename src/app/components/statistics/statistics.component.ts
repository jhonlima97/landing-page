import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { PlatformService } from '../../api/platform.service';
import { CountUp } from 'countup.js';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statistics.component.html'
})
export class StatisticsComponent implements AfterViewInit{

  statistics = [
    { id: 'listings',   start: 4, end: 90, label: 'Listings' },
    { id: 'categories', start: 1, end: 40, label: 'Listing Categories' },
    { id: 'visitors',   start: 3, end: 65, label: 'Visitors' },
    { id: 'clients',    start: 2, end: 50, label: 'Happy Clients' },
  ];
  
  constructor(private platformService: PlatformService) {}

  ngAfterViewInit() {
    if (this.platformService.isBrowser()) {
      // Solo ejecuta este código en el navegador
      this.statistics.forEach(stat => {
        const options = {
          startVal: stat.start,
          decimalPlaces: 0,
          duration: 5, // Duración en segundos
        };
        const countUp = new CountUp(stat.id, stat.end, options);
        if (!countUp.error) {
          countUp.start();
        } else {
          console.error(countUp.error);
        }
      });
    }
  }
}
