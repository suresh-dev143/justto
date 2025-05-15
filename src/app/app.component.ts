

import { Component, Pipe } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./features/components/navbar/navbar.component";
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'justto';
  products: Product[] = [
    { id: 1, name: 'Smartphone', price: 699.99, image: 'https://via.placeholder.com/300x200?text=Smartphone' },
    { id: 2, name: 'Laptop', price: 999.99, image: 'https://via.placeholder.com/300x200?text=Laptop' },
    { id: 3, name: 'Headphones', price: 99.99, image: 'https://via.placeholder.com/300x200?text=Headphones' },
    { id: 4, name: 'Smartwatch', price: 199.99, image: 'https://via.placeholder.com/300x200?text=Smartwatch' },
  ];

  addToCart(product: Product) {
    alert(`${product.name} added to cart!`);
  }
}
