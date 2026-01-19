import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-ex13-detail',
  standalone: true,
  templateUrl: './ex13-detail.html',
  styleUrls: ['./ex13-detail.css']
})
export class Ex13Detail {

  selectedProduct: any;

  constructor(
    private route: ActivatedRoute,
    private product: Product,
    private router: Router
  ) {
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
      if (id) {
        this.selectedProduct = this.product.getById(id);
      }
    });
  }

  goBack() {
    this.router.navigate(['ex13']);
  }
}
