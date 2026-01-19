import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService } from '../catalog';

@Component({
  selector: 'app-ex14',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex14.html',
  styleUrls: ['./ex14.css']
})
export class Ex14 {

  categories: any[] = [];

  constructor(private catalog: CatalogService) {
    this.categories = this.catalog.getCategories();
  }
}
