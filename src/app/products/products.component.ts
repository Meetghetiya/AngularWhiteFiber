import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      name: 'Facial Tissue Paper',
      image: 'assets/Whykempt2.jpg'
    },
    {
      name: 'Toilet Tissue Paper',
      image: 'assets/Whykempt3.jpg'
    },
    {
      name: 'Napkin Tissue',
      image: 'assets/Whykempt4.jpg'
    },
    {
      name: 'Kitchen Tissue',
      image: 'assets/KitchenTissue/image1.jpg'
    }
  ];
  
  selectedProduct = this.products[0]; 

  onProductChange(product: any) {
    this.selectedProduct = product;
  }

 
  
}
