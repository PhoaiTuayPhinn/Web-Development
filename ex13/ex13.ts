import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-ex13',
  standalone: true,
  imports: [CommonModule],   // 🔥 BẮT BUỘC
  templateUrl: './ex13.html',
  styleUrls: ['./ex13.css']
})
export class Ex13 {
  products: any[] = [];

  constructor(
    private pservice: Product,
    private router: Router
  ) {
    this.products = this.pservice.getAll(); // hoặc getProductsWithImages()
    console.log(this.products); // 👈 test
  }

  viewDetail(p: any) {
    this.router.navigate(['ex13', p.id]);
  }
}
