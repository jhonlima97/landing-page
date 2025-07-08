
import { provideHttpClient } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';
import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../../api/reviews.service';


interface ReviewCard {
  id: number;
  image: string;
  client: string;
  location: string;
  testimonial: string;
}

@Component({
  selector: 'app-reviews',
  imports: [provideHttpClient, SwiperModule],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
  providers: [ReviewsService, ]
})
export class ReviewsComponent implements OnInit {
  reviews: ReviewCard[] = [];

  slideConfig = {
    slidesToShow: 3,  // Muestra 3 crds
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true, // Centra el slide activo
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  constructor(private reviewsService: ReviewsService) {}

  ngOnInit(): void {
    this.reviewsService.getReviewsData().subscribe((data: ReviewCard[]) => {
      this.reviews = data;
    }, (error) => {
      console.error('Error fetching reviews data', error);
    });
  }
}
