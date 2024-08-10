import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreService } from '../../api/explore.service';
import { HttpClientModule } from '@angular/common/http';

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
  imports: [CommonModule, HttpClientModule],
  templateUrl: './activity-card.component.html',
  providers: [ExploreService]
})

export class ActivityCardComponent implements OnInit {
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

  activityCards: ActivityCard[] = [];

  constructor(private exploreService: ExploreService) {}

  ngOnInit(): void {
    this.exploreService.getExploreData().subscribe((data) => {
      //console.log("Data del JSON: ", data);
      this.activityCards = data;
    }, (error) => {
      console.error('Error fetching explore data', error);
    });
  }
}