import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/prdoduct.model';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {

  products: Product[] = [];
  product_columns: string[] = [
    "id",
    "name",
    "price",
    "department",
    "description"
  ];
  constructor(
    private _productsService:ProductService
  ) { }

  ngOnInit(): void {
    this.products = this._productsService.getProduct();
  }

}
