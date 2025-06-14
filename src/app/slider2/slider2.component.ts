import { Component } from '@angular/core';

@Component({
  selector: 'app-slider2',
  templateUrl: './slider2.component.html',
  styleUrls: ['./slider2.component.css']
})
export class Slider2Component {
  images = [
    'https://swiperjs.com/demos/images/nature-1.jpg',
    'https://swiperjs.com/demos/images/nature-2.jpg',
    'https://swiperjs.com/demos/images/nature-3.jpg',
    'https://swiperjs.com/demos/images/nature-4.jpg',
    'https://swiperjs.com/demos/images/nature-5.jpg',
    'https://swiperjs.com/demos/images/nature-6.jpg',
    'https://swiperjs.com/demos/images/nature-7.jpg',
    'https://swiperjs.com/demos/images/nature-8.jpg',
    'https://swiperjs.com/demos/images/nature-9.jpg',
    'https://swiperjs.com/demos/images/nature-10.jpg',
  ];
  
  swiperBreakpoints = {
    360: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    414: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    344: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  };
  // currentSlide = 0;
  // imagesPerSlide = 3;
  // slideIndexes: number[] = [];

  // ngOnInit() {
  //   const total = Math.ceil(this.images.length / this.imagesPerSlide);
  //   this.slideIndexes = Array.from({ length: total }, (_, i) => i);
  // }

  // get visibleImages() {
  //   const start = this.currentSlide * this.imagesPerSlide;
  //   return this.images.slice(start, start + this.imagesPerSlide);
  // }

  // next() {
  //   if (this.currentSlide < this.slideIndexes.length - 1) {
  //     this.currentSlide += 1; // move one group of 3
  //   }
  // }
  
  // prev() {
  //   if (this.currentSlide > 0) {
  //     this.currentSlide -= 1; // move one group of 3
  //   }
  // }

  // goToSlide(index: number) {
  //   this.currentSlide = index;
  // }
}
