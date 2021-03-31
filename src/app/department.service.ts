import { Injectable } from '@angular/core';
import { Department } from './models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private _departments: Department[] = [
    {id: 1, name: 'Clothing'},
    {id: 2, name: 'Books'},
    {id: 3, name: 'Eletronics'},
    {id: 4, name: 'Cosmetics'},
  ];

  constructor() { }

  getDepartments():Department[]{
    return this._departments;
  }

  addDepartments(d:Department){
    this._departments.push({
      id: this._departments[this._departments.length-1].id+1,
      ...d
    });
    console.log(this._departments);
  }

  getDepartment(id:number):Department{
    return this._departments.find((d) => d.id === id);
  }

}
