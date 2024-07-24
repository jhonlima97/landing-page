import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { FeatureCardComponent } from './components/feature-card/feature-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CategoryCardComponent,
    FeatureCardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'LisTrace';
}
