import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmailService } from './api/email.service';
import { FormsModule } from '@angular/forms';

import { CategoryCardComponent } from './components/category-card/category-card.component';
import { FeatureCardComponent } from './components/feature-card/feature-card.component';
import { ActivityCardComponent } from './components/activity-card/activity-card.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { PostsComponent } from "./components/posts/posts.component";
import { StatisticsComponent } from "./components/statistics/statistics.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterOutlet, CommonModule,
    CategoryCardComponent,
    FeatureCardComponent,
    ActivityCardComponent,
    ReviewsComponent,
    PostsComponent, 
    StatisticsComponent],
  templateUrl: './app.component.html'
})

export class AppComponent{

  constructor(private emailService: EmailService){}

  // For the navbar
  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // For the email
  email: string = '';
  message: string = '';
  isValid: boolean = false;

  handleSubmit(event: Event) {
    event.preventDefault();

    this.message = this.emailService.validateEmail(this.email);
    this.isValid = this.message === 'Account valid';

    alert(this.message);

    if (this.isValid) {
      // Simula el envío del email si es válido
      console.log('Message:', this.message); 
      console.log('Email submitted:', this.email);
    }
  }

  //For the inputs search in secction hero
  open(event: FocusEvent): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && 'placeholder' in inputElement) {
      inputElement.dataset['placeholder'] = inputElement.placeholder ?? '';
      inputElement.placeholder = '';
    }
  }

  close(event: FocusEvent): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && 'placeholder' in inputElement) {
      if (inputElement.value === '') {
        inputElement.placeholder = inputElement.dataset['placeholder'] || '';
      }
    }
  }

  // Funtion for scroll
  showScrollButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const yOffset = window.scrollY;
    // Ajusta el valor según el momento en que quieres que aparezca el botón
    const scrollThreshold = 1000;

    this.showScrollButton = yOffset > scrollThreshold;
  }
  
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
