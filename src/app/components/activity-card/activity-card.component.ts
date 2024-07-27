import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface ActivityCard {
  id: number;
  name: string;
  rating: string;
  ratingCount: number;
  minValue: number | string;
  maxValue: number | string;
  category: string;
  image: string;
  hostImage: string;
  hostDescription: string;
  status: boolean;
}

@Component({
  selector: 'app-activity-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.css']
})
export class ActivityCardComponent {
  @Input() cardData: ActivityCard = { 
    id: 0, 
    name: '', 
    rating: '', 
    ratingCount: 0,
    minValue: '',
    maxValue: '',
    category: '',
    image: '',
    hostImage: '',
    hostDescription: '',
    status: true,
  };

  activityCards: ActivityCard[] = [
    {
      id: 1,
      name: 'Tommy Helfinger Bar',
      rating: '5.0',
      ratingCount: 10,
      minValue: 5,
      maxValue: 300,
      category: 'Restaurant',
      image: 'assets/images/explore/e1.jpg',
      hostImage: 'assets/images/hosts/c1.png',
      hostDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
                      'sed do eiusmod tempor incid ut labore et dolore magna aliqua....',
      status: false
    },
    {
      id: 2,
      name: 'Swim And Dine Resort',
      rating: '4.5',
      ratingCount: 8,
      minValue: 50,
      maxValue: 500,
      category: 'Hotel',
      image: 'assets/images/explore/e2.jpg',
      hostImage: 'assets/images/hosts/c1.png',
      hostDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
                      'sed do eiusmod tempor incid ut labore et dolore magna aliqua....',
      status: false
    },
    {
      id: 3,
      name: 'Europe Tour',
      rating: '5.0',
      ratingCount: 15,
      minValue: 5,
      maxValue: 10,
      category: 'Destination',
      image: 'assets/images/explore/e3.jpg',
      hostImage: 'assets/images/hosts/c1.png',
      hostDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
                      'sed do eiusmod tempor incid ut labore et dolore magna aliqua....',
      status: false
    },
    {
      id: 4,
      name: 'Banglow With Swiming Pool',
      rating: '5.0',
      ratingCount: 10,
      minValue: 10,
      maxValue: 15,
      category: 'Real Estate',
      image: 'assets/images/explore/e4.jpg',
      hostImage: 'assets/images/hosts/c1.png',
      hostDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
                      'sed do eiusmod tempor incid ut labore et dolore magna aliqua....',
      status: false
    },
    {
      id: 5,
      name: 'Vintage Car Expo',
      rating: '4.2',
      ratingCount: 8,
      minValue: 500,
      maxValue: 1200,
      category: 'Automotion',
      image: 'assets/images/explore/e5.jpg',
      hostImage: 'assets/images/hosts/c1.png',
      hostDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
                      'sed do eiusmod tempor incid ut labore et dolore magna aliqua....',
      status: false
    },
    {
      id: 6,
      name: 'Thailand Tour',
      rating: '5.0',
      ratingCount: 15,
      minValue: 5,
      maxValue: 10,
      category: 'Destination',
      image: 'assets/images/explore/e6.jpg',
      hostImage: 'assets/images/hosts/c1.png',
      hostDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
                      'sed do eiusmod tempor incid ut labore et dolore magna aliqua....',
      status: false
    },

  ];
}
