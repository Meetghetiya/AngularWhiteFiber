import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-productshow',
  templateUrl: './productshow.component.html',
  styleUrls: ['./productshow.component.css']
})
export class ProductshowComponent {
  @Input() titleText: string = '';
  @Input() titleText2: string = '';
  @Input() description: string = '';
  @Input() images: string[] = [];
  
  // images: string[] = [
  //   'https://swiperjs.com/demos/images/nature-1.jpg',
  //   'https://swiperjs.com/demos/images/nature-2.jpg',
  //   'https://swiperjs.com/demos/images/nature-3.jpg',
  //   'https://swiperjs.com/demos/images/nature-4.jpg',
  //   'https://swiperjs.com/demos/images/nature-5.jpg',
  //   'https://swiperjs.com/demos/images/nature-6.jpg',
  // ];
} 
