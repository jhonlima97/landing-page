import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface CategoryCard {
  icon: string;
  name: string;
  counts: number;
}

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent {
  @Input() cardData: CategoryCard = { icon: '', name: '', counts: 0 };

  categoryCards: CategoryCard[] = [
    { icon: 'fi fi-rr-home',         name: 'Restaurant',  counts: 150 },
    { icon: 'fi fi-rr-suitcase-alt', name: 'Destination', counts: 214 },
    { icon: 'fi fi-rr-building',     name: 'Hotels',      counts: 185 },
    { icon: 'fi fi-rr-pills',        name: 'Healthcare',  counts: 200 },
    { icon: 'fi fi-rr-car',          name: 'Automotion',  counts: 120 }
  ];

}
