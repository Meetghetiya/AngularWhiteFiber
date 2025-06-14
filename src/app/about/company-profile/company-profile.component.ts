import { Component } from '@angular/core';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent {
  productDescription: string = `
  Tissue napkin is a type of cloth which is used at the table for wiping
  the mouth and fingers.
  It is generally small and folded. Tissue napkins are documented to be
  first used in ancient China where the paper was invented in 2nd entury 
  B.C. They were folded in squares and used for tea serving.
  A napkin, serviette or face towelette is a square of cloth or paper
  tissue used at the table for wiping the mouth and fingers while eating.
`;

productImages: string[] = [
    'https://swiperjs.com/demos/images/nature-1.jpg',
    'https://swiperjs.com/demos/images/nature-2.jpg',
    'https://swiperjs.com/demos/images/nature-3.jpg',
    'https://swiperjs.com/demos/images/nature-4.jpg',
    'https://swiperjs.com/demos/images/nature-5.jpg',
    'https://swiperjs.com/demos/images/nature-6.jpg',
  ];

  visionItems = [
    {
      heading: 'Superior Quality',
      description: 'Our products are manufactured using the best raw materials, ensuring superior softness, strength, and durability. Every batch undergoes rigorous quality checks to maintain high standards.'
    },
    {
      heading: 'Commitment to Hygiene ',
      description: 'Our products are manufactured under strict hygienic conditions, ensuring safety and cleanliness.'
    },
    {
      heading: 'Gentle on Skin ',
      description: 'Designed with user comfort in mind, our tissues are soft and suitable for all skin types.'
    },
    {
      heading: 'Effective Germ Protection',
      description: 'Our tissues provide an efficient barrier against germs, promoting better health and hygiene.'
    }
  ];
  
  missionItems = [
    {
      heading: 'Sustainability Commitment',
      description: 'We are dedicated to producing eco-friendly tissues, utilizing sustainable sources, and implementing green manufacturing practices.'
    },
    {
      heading: 'Competitive Pricing',
      description: 'Our efficient production processes allow us to provide high-quality products at competitive prices, ensuring the best value for our customers.'
    },
    {
      heading: 'Wide Product Range',
      description: 'From facial tissues to food-grade paper, our diverse product portfolio meets various market needs, making us a one-stop solution for tissue and specialty paper.'
    },
    {
      heading: 'Customer-Centric Approach',
      description: 'We prioritize customer satisfaction by providing flexible solutions, on-time deliveries, and excellent after-sales support.'
    }
  ];
  
}
