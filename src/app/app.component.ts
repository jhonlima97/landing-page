import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { FeatureCardComponent } from './components/feature-card/feature-card.component';
import { ActivityCardComponent } from './components/activity-card/activity-card.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { PostsComponent } from "./components/posts/posts.component";
import { CommonModule } from '@angular/common';
import { EmailService } from './api/email.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,
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

  // For el navbar
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // For el email
  email: string = '';
  message: string = '';
  isValid: boolean = false;

  constructor(private emailService: EmailService){}

  handleSubmit(event: Event) {
    event.preventDefault(); // Evita la recarga de la página

    this.message = this.emailService.validateEmail(this.email);
    this.isValid = this.message === 'Account valid';

    alert(this.message);

    if (this.isValid) {
      // Simula el envío del email si es válido
      console.log('Message:', this.message); 
      console.log('Email submitted:', this.email);
    }
  }
}
