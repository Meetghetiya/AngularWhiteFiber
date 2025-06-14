import { Component } from '@angular/core';

@Component({
  selector: 'app-napkin-tissue',
  templateUrl: './napkin-tissue.component.html',
  styleUrls: ['./napkin-tissue.component.css']
})
export class NapkinTissueComponent {
  productDescription: string = `
  Ideal for both personal and commercial use, highly absorbent and available in various sizes.
`;

productImages: string[] = [
    'assets/NapkinTissue/image1.jpg',
    'assets/NapkinTissue/image2.jpg',
    'assets/NapkinTissue/image3.jpg',
    'assets/NapkinTissue/image2.jpg',
    'assets/NapkinTissue/image1.jpg'
  ];

  tabs = [
    {
      key: 'features',
      title: 'Features',
      type: 'list',
      content: [
        'Absorbency',
        'Basis weight',
        'Thickness',
        'Specific volume',
        'Brightness',
        'Stretch',
        'Appearance',
      ]
    },
    {
      key: 'application',
      title: 'Application',
      type: 'text',
      content: `Wiping the mouth and fingers while eating`
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
