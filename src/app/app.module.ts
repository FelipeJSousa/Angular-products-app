import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatTabsModule } from '@angular/material/tabs'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductFormComponent } from './product-form/product-form.component';
import { DepartmentFormComponent } from './department-form/department-form.component';
import { ProductsTableComponent } from './products-table/products-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductFormComponent,
    DepartmentFormComponent,
    ProductsTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
