import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('productsSection') productsSection!: ElementRef;
  @ViewChild('exportSection') exportSection!: ElementRef;
  @ViewChild('catalogueSection') catalogueSection!: ElementRef;
  @ViewChild('contactSection') contactSection!: ElementRef;

  visionItems = [
    {
      heading: 'WhiteFiber Committed',
      description:
        'To emerge as a global leader in eco-friendly product exports, known for quality, innovation, and our role in reducing plastic pollution worldwide.',
    },
  ];

  missionItems = [
    {
      heading: 'To Exceed Customer Expectations',
      description:
        'To promote sustainability through exports by delivering high-quality biodegradable products that make a positive impact on our environment and clients’ bottom lines.',
    },
  ];

  visionItems2 = [
    {
      heading: 'Superior Quality',
      description:
        'Our products are manufactured using the best raw materials, ensuring superior softness, strength, and durability. Every batch undergoes rigorous quality checks to maintain high standards.',
    },
    {
      heading: 'Commitment to Hygiene ',
      description:
        'Our products are manufactured under strict hygienic conditions, ensuring safety and cleanliness.',
    },
    {
      heading: 'Gentle on Skin ',
      description:
        'Designed with user comfort in mind, our tissues are soft and suitable for all skin types.',
    },
    {
      heading: 'Effective Germ Protection',
      description:
        'Our tissues provide an efficient barrier against germs, promoting better health and hygiene.',
    },
  ];

  missionItems2 = [
    {
      heading: 'Sustainability Commitment',
      description:
        'We are dedicated to producing eco-friendly tissues, utilizing sustainable sources, and implementing green manufacturing practices.',
    },
    {
      heading: 'Environmental Stewardship ',
      description:
        'Products that align with international sustainability goals (BPI, EN13432, FSC certifications).',
    },
    {
      heading: 'Wide Product Range',
      description:
        'From facial tissues to food-grade paper, our diverse product portfolio meets various market needs, making us a one-stop solution for tissue and specialty paper.',
    },
    {
      heading: 'Customer-Centric Approach',
      description:
        'We prioritize customer satisfaction by providing flexible solutions, on-time deliveries, and excellent after-sales support.',
    },
  ];

  @ViewChild('animatedText', { static: true }) animatedText!: ElementRef;

  isVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const top = this.animatedText.nativeElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    this.isVisible = top < windowHeight - 100;
  }

  navigateTo(section: string) {
    switch (section) {
      case 'about':
        this.aboutSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'products':
        this.productsSection.nativeElement.scrollIntoView({
          behavior: 'smooth',
        });
        break;
      case 'export':
        this.exportSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'catalogue':
        this.catalogueSection.nativeElement.scrollIntoView({
          behavior: 'smooth',
        });
        break;
      case 'contact':
        this.contactSection.nativeElement.scrollIntoView({
          behavior: 'smooth',
        });
        break;
    }
  }

  backgroundImageUrl = 'assets/greenerfuture/sliderimg3.jpg';
}
