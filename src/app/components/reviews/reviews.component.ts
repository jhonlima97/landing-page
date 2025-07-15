import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit,Inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ReviewsService } from '../../api/reviews.service';
import 'swiper/element/bundle';
import { register } from 'swiper/element/bundle';
register(); // 🔥 Activa Swiper Element antes del render

interface ReviewCard {
  id: number;
  image: string;
  client: string;
  location: string;
  testimonial: string;
}

@Component({
  selector: 'app-reviews',
  imports: [],
  templateUrl: './reviews.component.html',
  providers: [ReviewsService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Permite el uso de Swiper Element
})

export class ReviewsComponent implements OnInit, AfterViewInit, OnDestroy {
  reviews: ReviewCard[] = [];
  private swiperInitialized = false;

  constructor(
    private reviewsService: ReviewsService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.reviewsService.getReviewsData().subscribe((data: ReviewCard[]) => {
      this.reviews = data;
      // Reinicializar Swiper después de que los datos cambien
      this.initializeSwiper();
    }, (error) => {
      console.error('Error fetching reviews data', error);
    });
  }

  ngAfterViewInit(): void {
    // Solo inicializar si no se ha hecho ya
    if (!this.swiperInitialized) {
      this.initializeSwiper();
    }
  }

  ngOnDestroy(): void {
    // Limpiar al destruir el componente
    if (isPlatformBrowser(this.platformId)) {
      const swiperEl = document.querySelector('swiper-container');
      if (swiperEl && swiperEl.swiper) {
        swiperEl.swiper.destroy();
      }
    }
  }

  private initializeSwiper(): void {
    if (!isPlatformBrowser(this.platformId) || this.reviews.length === 0) {
      return;
    }

    setTimeout(() => {
      const swiperEl = document.querySelector('swiper-container') as any;
      if (swiperEl) {
        // Destruir instancia previa si existe
        if (swiperEl.swiper) {
          swiperEl.swiper.destroy();
        }

        // Inicializar Swiper
        swiperEl.initialize();
        this.swiperInitialized = true;

        // Agregar event listener para slides activos
        swiperEl.addEventListener('activeIndexChange', () => {
          const activeIndex = swiperEl.swiper.activeIndex;
          const slides = swiperEl.querySelectorAll('swiper-slide');
          slides.forEach((slide: Element, i: number) => {
            const isCentered = i === activeIndex + 1;
            // const slidesPerView = swiperEl.swiper.params.slidesPerView;
            // const offset = Math.floor(slidesPerView / 2); // ← 2 cuando son 5 slides
            // const isCentered = i === activeIndex + offset;

            slide.classList.toggle('center-slide', isCentered);
          });
        });
      }
    }, 100); // Aumenté el timeout para asegurar que el DOM esté listo
  }

  // Método para forzar reinicialización (útil para desarrollo)
  reinitializeSwiper(): void {
    this.swiperInitialized = false;
    this.initializeSwiper();
  }
}