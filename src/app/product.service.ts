import { Injectable } from '@angular/core';
import { DepartmentService } from './department.service';
import { Product } from './models/prdoduct.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _data: any[] = [
    { id: 1, name: "Laptop", department_id: 3, price: 1200.00, description: 'Laptop Description' },
    { id: 2, name: "Shirt", department_id: 1, price: 15.00, description: 'Shirt Description' },
    { id: 3, name: "Perfume", department_id: 4, price: 80.00, description: 'Perfume Description' },
    { id: 4, name: "Mouse", department_id: 3, price: 20.00, description: 'Mouse Description' },
  ]
  
  private _products: Product[] = [];
  
  constructor(
    private _departmentService : DepartmentService
  ) { 

    for(let p of this._data){
      this._products.push(
        {
          id: p.id,
          name: p.name, 
          price: p.price,
          department: this._departmentService.getDepartment(p.id),
          description: p.description
        }
      )
    }
  }

  getProduct(): Product[]{
    return this._products;
  }

  addProduct(p: Product){
    this._products.push({
      id: this._products[this._products.length-1].id+1,
      ...p
    })
  }

}
