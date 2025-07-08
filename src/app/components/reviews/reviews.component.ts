import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit,Inject, PLATFORM_ID } from '@angular/core';
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

export class ReviewsComponent implements OnInit, AfterViewInit {
  reviews: ReviewCard[] = [];


  constructor(private reviewsService: ReviewsService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
  this.reviewsService.getReviewsData().subscribe((data: ReviewCard[]) => {
    this.reviews = data;

    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const swiperEl = document.querySelector('swiper-container');
        if (swiperEl) swiperEl.initialize();
      }, 0);
    }
  }, (error) => {
    console.error('Error fetching reviews data', error);
  });
}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
    const swiperEl = document.querySelector('swiper-container');
    if (swiperEl) {
      swiperEl.addEventListener('activeIndexChange', () => {
        const activeIndex = swiperEl.swiper.activeIndex;
        const slides = swiperEl.querySelectorAll('swiper-slide');
        slides.forEach((slide, i) => {
          const isCentered = i === activeIndex + 1;
          slide.classList.toggle('center-slide', isCentered);
        });
      });
    }
  }
  }
}
