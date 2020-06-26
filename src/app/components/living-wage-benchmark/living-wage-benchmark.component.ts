import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SelectionModel} from '@angular/cdk/collections';


export interface UserData {
    country: string;
    region: string;
    rural_urban: string;
    benchmark_location: string;
    methodology: string;
    locally_endorced: string;
    year: string;
    currency: string;
    gross_lw_local_currency: string;
    gross_lw_local_usd: string;
    created_by: string;
    updated_by: string;
    delete: string;
    save: string;
    
  }
  
  const ELEMENT_DATA: UserData[] = [
    {country: 'Country-1', region: 'Region1', rural_urban: 'Rural', benchmark_location: 'EN-UK', methodology: 'EN-UK', locally_endorced: 'EN-UK',year: 'EN-UK',currency: 'EN-UK',gross_lw_local_usd: 'EN-UK',gross_lw_local_currency: 'EN-UK', created_by: 'ABC', updated_by: "Robin",delete:'fa fa-trash',save: 'fa fa-floppy-o'},
  ];
  
  
@Component({
  selector: 'app-living-wage-benchmark',
  templateUrl: './living-wage-benchmark.component.html',
  styleUrls: ['./living-wage-benchmark.component.css']
})
export class LivingWageBenchmarkComponent implements OnInit {
  displayedColumns: string[] = ['select', 'country','region','rural_urban','benchmark_location','methodology','locally_endorced','year','currency','gross_lw_local_usd','gross_lw_local_currency', 'created_by', 'updated_by','delete','save'];
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
