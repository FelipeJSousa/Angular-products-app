import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department.model';

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

  constructor() { }

  ngOnInit(): void {
  }

  save(){

  }

  clear(){

  }

}
