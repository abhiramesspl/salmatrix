import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SelectionModel} from '@angular/cdk/collections';


export interface UserData {
    branch: string;
    category: string;
    group: string;
    language: string;
    created_by: string;
    updated_by: string;
    delete: string;
    save: string;
    
  }
  
  const ELEMENT_DATA: UserData[] = [
    {branch: 'EN-UK', category: 'EN-UK', group: 'EN-UK',language: 'EN-UK', created_by: 'ABC', updated_by: "Robin",delete:'fa fa-trash',save: 'fa fa-floppy-o'},
   
  
  
  ];

@Component({
  selector: 'app-product-group',
  templateUrl: './product-group.component.html',
  styleUrls: ['./product-group.component.css']
})
export class ProductGroupComponent implements OnInit {
  displayedColumns: string[] = ['select', 'branch','category','group','language', 'created_by', 'updated_by','delete','save'];
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
