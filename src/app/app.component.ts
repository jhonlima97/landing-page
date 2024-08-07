import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { FeatureCardComponent } from './components/feature-card/feature-card.component';
import { ActivityCardComponent } from './components/activity-card/activity-card.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { PostsComponent } from "./components/posts/posts.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, CommonModule,
    CategoryCardComponent,
    FeatureCardComponent,
    ActivityCardComponent,
    ReviewsComponent, 
    PostsComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
