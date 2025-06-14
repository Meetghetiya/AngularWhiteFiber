import { Component } from '@angular/core';

@Component({
  selector: 'app-toilet-tissue-paper',
  templateUrl: './toilet-tissue-paper.component.html',
  styleUrls: ['./toilet-tissue-paper.component.css']
})
export class ToiletTissuePaperComponent {
  productDescription: string = `
  Strong and soft, ensuring a pleasant experience while maintaining high hygiene standards.
`;

productImages: string[] = [
    'assets/ToiletTissue/image1.jpg',
    'assets/ToiletTissue/image2.jpg',
    'assets/ToiletTissue/image3.jpg',
    'assets/ToiletTissue/image2.jpg',
    'assets/ToiletTissue/image1.jpg'
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
