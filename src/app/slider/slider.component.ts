import { Component } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  images = [
    'assets/Home.jpg',
    'assets/Home2.jpg',
    'assets/Home3.jpg'
  ];

  currentSlide = 0;

  ngOnInit(): void {
    this.animateIn();
  }

  nextSlide(): void {
    this.animateOut(() => {
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
      this.animateIn();
    });
  }

  prevSlide(): void {
    this.animateOut(() => {
      this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
      this.animateIn();
    });
  }

  animateIn(): void {
    gsap.fromTo('.slide.active img',
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 0.7, ease: 'power2.out' }
    );
  }

  animateOut(callback: () => void): void {
    gsap.to('.slide.active img', {
      opacity: 0,
      x: -100,
      duration: 0.5,
      ease: 'power2.in',
      onComplete: callback
    });
  }

  swiperBreakpoints = {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  };
}
