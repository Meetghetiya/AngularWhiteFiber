import { Component } from '@angular/core';

@Component({
  selector: 'app-mainproduct',
  templateUrl: './mainproduct.component.html',
  styleUrls: ['./mainproduct.component.css'],
})
export class MainproductComponent {
  tabs = [
    'Tissue Paper Products',
    'Sugarcane Bagasse Tableware',
    'Biodegradable Paper Cups',
    'Paper Bags',
  ];
  selectedTab = 1;

  selectTab(tabIndex: number) {
    this.selectedTab = tabIndex;
  }

  productDescription: string = `
  Ideal for both personal and commercial use, highly absorbent and available in various sizes.
`;

  productImages: string[] = [
    'assets/NapkinTissue/image1.jpg',
    'assets/NapkinTissue/image2.jpg',
    'assets/NapkinTissue/image3.jpg',
    'assets/NapkinTissue/image2.jpg',
    'assets/NapkinTissue/image1.jpg',
  ];

  tabss = [
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
      ],
    },
    {
      key: 'application',
      title: 'Application',
      type: 'text',
      content: `Wiping the mouth and fingers while eating`,
    },
    {
      key: 'inquiry',
      title: 'Product Inquiry',
      type: 'html',
      content: `For product inquiries, please contact us at 
                 <a href=''>Whitefiber@gmail.com</a>
                or fill out our contact form.`,
    },
  ];
}
