import { Component } from '@angular/core';

@Component({
  selector: 'app-facial-tissue-paper',
  templateUrl: './facial-tissue-paper.component.html',
  styleUrls: ['./facial-tissue-paper.component.css']
})
export class FacialTissuePaperComponent {
  productDescription: string = `
  Super soft and high-quality facial tissues that have been specifically
  designed for your daily use. Soft, absorbent, and gentle on the skin, perfect for everyday use.
`;

productImages: string[] = [
    'assets/FacialTissue/image1.jpg',
    'assets/FacialTissue/image2.jpg',
    'assets/FacialTissue/image3.jpg',
    'assets/FacialTissue/image1.jpg',
    'assets/FacialTissue/image2.jpg'
  ];

  tabs = [
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
