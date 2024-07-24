import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface FeatureCard {
  icon: string;
  href: string;
  label?: string;
  texto: string;
}

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.css']
})
export class FeatureCardComponent {

  @Input() cardData: FeatureCard = { 
    icon: '', 
    href: '', 
    label: 'Read More', 
    texto: ''  
  };

  featureCards: FeatureCard[] = [
    { icon: 'fi fi-rr-lightbulb-on', href: '', label: 'Choose what to Do',  
      texto: 'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.' },
    { icon: 'fi fi-rr-car', href: '', label: 'Find what you want',  
      texto: 'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.' },
    { icon: 'fi fi-rr-map-marker', href: '', label: 'Explore amazing Place',  
      texto: 'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.' }
  ];

}
