import { Component } from '@angular/core';

@Component({
  selector: 'app-kitchen-tissue',
  templateUrl: './kitchen-tissue.component.html',
  styleUrls: ['./kitchen-tissue.component.css']
})
export class KitchenTissueComponent {
  productDescription: string = `
  Highly absorbent and strong, designed for cleaning and wiping tasks.
`;

productImages: string[] = [
    'assets/KitchenTissue/image1.jpg',
    'assets/KitchenTissue/image2.jpg',
    'assets/KitchenTissue/image1.jpg',
    'assets/KitchenTissue/image2.jpg',
    'assets/KitchenTissue/image1.jpg'
  ];

  tabs = [
    {
      key: 'features',
      title: 'Features',
      type: 'list',
      content: [
        'Stronger',
        '100% hygienic',
        'Great Absorbent'
      ]
    },
    {
      key: 'inquiry',
      title: 'Product Inquiry',
      type: 'html',
      content: `For product inquiries, please contact us at 
                 <a href=''>Whitefiber@gmail.com</a>
                or fill out our contact form.`
    }
  ];
}
