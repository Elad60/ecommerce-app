import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail implements OnInit {
  id = input.required<string>()

  ngOnInit(): void {
    console.log(this.id());
  }
}
