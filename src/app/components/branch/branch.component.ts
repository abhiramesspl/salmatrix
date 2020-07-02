import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SelectionModel} from '@angular/cdk/collections';


export interface UserData {
    branch: string;
    branch_spanish: string;
    created_by: string;
    updated_by: string;
    delete: string;
    save: string;
    
  }
  
  const ELEMENT_DATA: UserData[] = [
    {branch: 'Food', branch_spanish: 'comida',created_by: 'ABC', updated_by: "Robin",delete:'fa fa-trash',save: 'fa fa-floppy-o'},
    {branch: 'Food', branch_spanish: 'comida',created_by: 'ABC', updated_by: "Robin",delete:'fa fa-trash',save: 'fa fa-floppy-o'},
    {branch: 'Food', branch_spanish: 'comida',created_by: 'ABC', updated_by: "Robin",delete:'fa fa-trash',save: 'fa fa-floppy-o'},

    
  
  
  ];
  
  @Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})  
export class BranchComponent implements OnInit {
  displayedColumns: string[] = ['select', 'branch','branch_spanish', 'created_by', 'updated_by','delete','save'];
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
