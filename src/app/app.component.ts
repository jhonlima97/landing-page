import { Component, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { EmailService } from './api/email.service';
import { FormsModule } from '@angular/forms';

import { CategoryCardComponent } from './components/category-card/category-card.component';
import { FeatureCardComponent } from './components/feature-card/feature-card.component';
import { ExploreCardComponent } from './components/explore-card/explore-card.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { PostsComponent } from "./components/posts/posts.component";
import { StatisticsComponent } from "./components/statistics/statistics.component";

@Component({
    selector: 'app-root',
    imports: [FormsModule, CommonModule,
      CategoryCardComponent,
      FeatureCardComponent,
      ExploreCardComponent,
      ReviewsComponent,
      PostsComponent,
      StatisticsComponent],
    templateUrl: './app.component.html'
})

export class AppComponent{

  constructor(private emailService: EmailService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  // Propiedad para almacenar la posición actual del scroll
  currentScroll: number = 0; 
  // Propiedad para controlar la visibilidad del botón de "scroll to top"
  showScrollButton = false;

  // Escucha el evento de scroll de la ventana y actualiza ambas lógicas
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    // Lógica para la barra de navegación
    this.currentScroll = window.pageYOffset;

    // Lógica para el botón de "scroll to top"
    const yOffset = window.scrollY;
    const scrollThreshold = 1000; // Ajusta este valor si es necesario
    this.showScrollButton = yOffset > scrollThreshold;
  }

  // Define la posición 'top' de la barra de navegación
  getNavPosition(): string {
    if (!isPlatformBrowser(this.platformId)) {
      return '60px';
    }
    return this.currentScroll > 0 ? '0px'
      : (window.innerWidth < 768 ? '110px' : '60px');
  }

  // Para la barra de navegación del menú móvil
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

  // For the button scroll to top  
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
