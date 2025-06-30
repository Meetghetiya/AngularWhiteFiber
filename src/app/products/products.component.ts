import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products = [
    {
      name: 'Facial Tissue Paper',
      image: 'assets/Whykempt2.jpg',
    },
    {
      name: 'Toilet Tissue Paper',
      image: 'assets/Whykempt3.jpg',
    },
    {
      name: 'Napkin Tissue',
      image: 'assets/Whykempt4.jpg',
    },
    {
      name: 'Kitchen Tissue',
      image: 'assets/KitchenTissue/image1.jpg',
    },
    {
      name: 'Round Plate',
      image: 'assets/Products/display-10-ROUND-PLATE.png',
    },
    {
      name: '3CP SQUARE PLATE',
      image: 'assets/Products/SQUAREPLATE.png',
    },
    {
      name: 'BOWL',
      image: 'assets/Products/BOWL.png',
    },
    {
      name: 'CLAMSHELL',
      image: 'assets/Products/CLAMSHELL.png',
    },
    {
      name: 'RIPPLE WALL CUPS',
      image: 'assets/Products/RIPPLEWALLCUPS.jpeg',
    },
    {
      name: 'SQUARE BOTTOM BAG',
      image: 'assets/Products/SquareBottomPaperBag.png',
    },
    {
      name: 'TWISTED HANDLE BAGS',
      image: 'assets/Products/3-1.png',
    },
    {
      name: 'FLAT HANDLE BAGS',
      image: 'assets/Products/FlatHandlePaperBag.png',
    },
  ];

  selectedProduct = this.products[0];

  onProductChange(product: any) {
    this.selectedProduct = product;
  }
}
