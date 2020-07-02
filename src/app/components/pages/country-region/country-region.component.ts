
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SelectionModel} from '@angular/cdk/collections';

export interface UserData {
  country:string;
  country_spanish: string;
  currency: string;
  ISOID: string;
  sww: number; 
  created:string;
  updated:string;
  delete:string;
  save:string;
}

const ELEMENT_DATA: UserData[] = [
  {ISOID: 'AF', currency: 'AFN', sww: 48,country: 'Spain', country_spanish: 'España', created: 'Robin 12-06-2020',updated: 'Robin 25-06-2020',delete:'fa fa-trash',save: 'fa fa-floppy-o'},
  {ISOID: 'AF', currency: 'AFN', sww: 48,country: 'Spain', country_spanish: 'España', created: 'Robin 12-06-2020',updated: 'Robin 25-06-2020',delete:'fa fa-trash',save: 'fa fa-floppy-o'},
  {ISOID: 'AF', currency: 'AFN', sww: 48,country: 'Spain', country_spanish: 'España', created: 'Robin 12-06-2020',updated: 'Robin 25-06-2020',delete:'fa fa-trash',save: 'fa fa-floppy-o'},
  {ISOID: 'AF', currency: 'AFN', sww: 48,country: 'Spain', country_spanish: 'España', created: 'Robin 12-06-2020',updated: 'Robin 25-06-2020',delete:'fa fa-trash',save: 'fa fa-floppy-o'},
 


];



@Component({
  selector: 'app-country-region',
  templateUrl: './country-region.component.html',
  styleUrls: ['./country-region.component.css']
})

export class CountryRegionComponent implements OnInit {
  displayedColumns: string[] = ['select','country','country_spanish', 'ISOID', 'currency', 'sww', 'created', 'updated','delete','save'];
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

