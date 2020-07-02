import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SelectionModel} from '@angular/cdk/collections';

export interface UserData {
  currency: string;
  region: string;
  region_spanish: string;
  created:string;
  updated:string;
  delete:string;
  country:string;
  save:string;
}

const ELEMENT_DATA: UserData[] = [
  {currency: 'Euro',country: 'Spain', region: 'Barcelona', region_spanish: 'Barcelona', created: 'Robin 12-06-2020',updated: 'Robin 25-06-2020',delete:'fa fa-trash',save: 'fa fa-floppy-o'},
  {currency: 'Euro',country: 'Spain', region: 'Barcelona', region_spanish: 'Barcelona', created: 'Robin 12-06-2020',updated: 'Robin 25-06-2020',delete:'fa fa-trash',save: 'fa fa-floppy-o'},
  {currency: 'Euro',country: 'Spain', region: 'Barcelona', region_spanish: 'Barcelona', created: 'Robin 12-06-2020',updated: 'Robin 25-06-2020',delete:'fa fa-trash',save: 'fa fa-floppy-o'},
  {currency: 'Euro',country: 'Spain', region: 'Barcelona', region_spanish: 'Barcelona', created: 'Robin 12-06-2020',updated: 'Robin 25-06-2020',delete:'fa fa-trash',save: 'fa fa-floppy-o'},

];


@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  languages: any= ['EN', 'FR'];
  selected:any = 'EN';

  displayedColumns: string[] = ['select', 'country','region','region_spanish', 'currency', 'created', 'updated','delete','save'];
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

  constructor() { }

  ngOnInit(): void {
  }

}
