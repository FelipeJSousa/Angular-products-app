import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/prdoduct.model';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {

  @ViewChild(MatTable) datatable: MatTable<any>;

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
    this._productsService.onNewProduct.subscribe((p) => {
      this.datatable.renderRows();
    });
  }

}
