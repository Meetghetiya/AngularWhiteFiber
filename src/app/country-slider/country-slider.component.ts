import { Component } from '@angular/core';

@Component({
  selector: 'app-country-slider',
  templateUrl: './country-slider.component.html',
  styleUrls: ['./country-slider.component.css']
})
export class CountrySliderComponent {
  countries = [
    { name: 'Thailand', flag: 'assets/flags/thailand.png' },
    { name: 'Czech Republic', flag: 'assets/flags/czech.png' },
    { name: 'Haiti', flag: 'assets/flags/haiti.png' },
    { name: 'Japan', flag: 'assets/flags/japan.png' },
    // Add more countries as needed
  ];
  
  swiperBreakpoints = {
    0: { slidesPerView: 1 },
    576: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  };
}
