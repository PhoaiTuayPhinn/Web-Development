import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../customer';

@Component({
  selector: 'app-ex18',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex18.html',
  styleUrls: ['./ex18.css']
})
export class Ex18 {

  groups: any[] = [];

  constructor(private customerService: CustomerService) {
    this.customerService.getCustomerGroups().subscribe(data => {
      this.groups = data;
    });
  }
}
