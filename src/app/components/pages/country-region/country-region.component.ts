
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SelectionModel} from '@angular/cdk/collections';

export interface UserData {
  currency: string;
  ISOID: string;
  sww: number;
  lang: string;
  created:string;
  updated:string;
}

const ELEMENT_DATA: UserData[] = [
  {ISOID: 'AF', currency: 'AFN', sww: 48, lang: 'Afghanistan', created: 'Robin 12-06-2020',updated: 'Robin 25-06-2020'},
  {ISOID: 'AF', currency: 'AFN', sww: 48, lang: 'Afghanistan', created: 'Robin 12-06-2020',updated: 'Robin 25-06-2020'},
  {ISOID: 'AF', currency: 'AFN', sww: 48, lang: 'Afghanistan', created: 'Robin 12-06-2020',updated: 'Robin 25-06-2020'},
  {ISOID: 'AF', currency: 'AFN', sww: 48, lang: 'Afghanistan', created: 'Robin 12-06-2020',updated: 'Robin 25-06-2020'},
  {ISOID: 'AF', currency: 'AFN', sww: 48, lang: 'Afghanistan', created: 'Robin 12-06-2020',updated: 'Robin 25-06-2020'},
  {ISOID: 'AF', currency: 'AFN', sww: 48, lang: 'Afghanistan', created: 'Robin 12-06-2020',updated: 'Robin 25-06-2020'},
  {ISOID: 'AF', currency: 'AFN', sww: 48, lang: 'Afghanistan', created: 'Robin 12-06-2020',updated: 'Robin 25-06-2020'},
  {ISOID: 'AF', currency: 'AFN', sww: 48, lang: 'Afghanistan', created: 'Robin 12-06-2020',updated: 'Robin 25-06-2020'},
  {ISOID: 'AF', currency: 'AFN', sww: 48, lang: 'Afghanistan', created: 'Robin 12-06-2020',updated: 'Robin 25-06-2020'},
  {ISOID: 'AF', currency: 'AFN', sww: 48, lang: 'Afghanistan', created: 'Robin 12-06-2020',updated: 'Robin 25-06-2020'},



];



@Component({
  selector: 'app-country-region',
  templateUrl: './country-region.component.html',
  styleUrls: ['./country-region.component.css']
})

export class CountryRegionComponent implements OnInit {
  languages: any= ['EN', 'FR'];
  selected:any = 'EN';

  displayedColumns: string[] = ['select', 'ISOID', 'currency', 'sww', 'lang','created', 'updated'];
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

