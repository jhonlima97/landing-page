import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreService } from '../../api/explore.service';

interface ExploreCard {
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
  selector: 'app-explore-card',
  imports: [CommonModule],
  templateUrl: './explore-card.component.html',
  providers: [ExploreService],
})

export class ExploreCardComponent implements OnInit {
  @Input() cardData: ExploreCard = { 
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

  activityCards: ExploreCard[] = [];

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