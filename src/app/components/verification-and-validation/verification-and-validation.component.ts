import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SelectionModel} from '@angular/cdk/collections';


export interface UserData {
    name: string;
    organisation: string;
    email: string;
    phone: string;
    matrix_nr: string;
    matrix_date: string;
    checked_by_sim: string;
    save: string;
    
  }
  
  const ELEMENT_DATA: UserData[] = [
    {name: 'Abc Name',organisation: 'ABC IDH',email: 'abc@idh.org',phone: '+8888999',matrix_nr: '1234',matrix_date: '08/03/2020',checked_by_sim: 'true', save: 'fa fa-info-circle'},
    {name: 'Abc Name',organisation: 'ABC IDH',email: 'abc@idh.org',phone: '+8888999',matrix_nr: '1234',matrix_date: '08/03/2020',checked_by_sim: 'true', save: 'fa fa-info-circle'},
    {name: 'Abc Name',organisation: 'ABC IDH',email: 'abc@idh.org',phone: '+8888999',matrix_nr: '1234',matrix_date: '08/03/2020',checked_by_sim: 'true', save: 'fa fa-info-circle'},
    {name: 'Abc Name',organisation: 'ABC IDH',email: 'abc@idh.org',phone: '+8888999',matrix_nr: '1234',matrix_date: '08/03/2020',checked_by_sim: 'true', save: 'fa fa-info-circle'},
    {name: 'Abc Name',organisation: 'ABC IDH',email: 'abc@idh.org',phone: '+8888999',matrix_nr: '1234',matrix_date: '08/03/2020',checked_by_sim: 'true', save: 'fa fa-info-circle'},
    {name: 'Abc Name',organisation: 'ABC IDH',email: 'abc@idh.org',phone: '+8888999',matrix_nr: '1234',matrix_date: '08/03/2020',checked_by_sim: 'true', save: 'fa fa-info-circle'},
  
    
    
  
  
  ];
  

@Component({
  selector: 'app-verification-and-validation',
  templateUrl: './verification-and-validation.component.html',
  styleUrls: ['./verification-and-validation.component.css']
})
export class VerificationAndValidationComponent implements OnInit {
  displayedColumns: string[] = ['select', 'name','organisation','email','phone','matrix_nr','matrix_date', 'checked_by_sim','save'];
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
