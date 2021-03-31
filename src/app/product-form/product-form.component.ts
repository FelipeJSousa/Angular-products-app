import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Department } from '../models/department.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  name: string;
  departments: Department[];
  department: Department;
  description: string;
  price: number;

  constructor(
    private _productService:ProductService,
    private _departmentService:DepartmentService
  ) { }

  ngOnInit(): void {
    this.departments = this._departmentService.getDepartments();
  }

  save(){
    this._productService.addProduct({
      name: this.name,
      price: this.price,
      department: this.department,
      description: this.description
    })
    this.clear();
  }

  clear(){
    this.name= "",
    this.price= null,
    this.description= "",
    this.department= null
  }

}
