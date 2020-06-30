import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SelectionModel} from '@angular/cdk/collections';


export interface UserData {
    branch: string;
    category: string;
    language: string;
    created_by: string;
    updated_by: string;
    delete: string;
    save: string;
    
  }
  
  const ELEMENT_DATA: UserData[] = [
    {branch: 'Branch 1', category: 'Category 1',language: 'EN-UK', created_by: 'ABC', updated_by: "Robin",delete:'fa fa-trash',save: 'fa fa-floppy-o'},
    {branch: 'Branch 1', category: 'Category 1',language: 'EN-UK', created_by: 'ABC', updated_by: "Robin",delete:'fa fa-trash',save: 'fa fa-floppy-o'},
    {branch: 'Branch 1', category: 'Category 1',language: 'EN-UK', created_by: 'ABC', updated_by: "Robin",delete:'fa fa-trash',save: 'fa fa-floppy-o'},
  
  
  
  ];


@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  displayedColumns: string[] = ['select', 'branch','category','language', 'created_by', 'updated_by','delete','save'];
  dataSource = new MatTableDataSource<UserData>(ELEMENT_DATA);
  selection = new SelectionModel<UserData>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
  ngOnInit(): void{

  }

}
