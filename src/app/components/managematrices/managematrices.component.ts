import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

export interface UserData {
  description: string;
  createddate: string;
  finalizeddate: string;
  matrixgenerated: string;
  save: string;
  facilityname:string;
  country:string;
  delete:string;
}

const ELEMENT_DATA: UserData[] = [
  { description: 'Matrix 1', createddate: '25-06-2020', finalizeddate: '25-06-2020', matrixgenerated: 'Yes',  save: 'fa fa-eye', facilityname: 'supply', country:'UK', delete:'fa fa-trash' },
  { description: 'Matrix 2', createddate: '25-06-2020', finalizeddate: '25-06-2020', matrixgenerated: 'No',  save: 'fa fa-eye',facilityname: 'supply', country:'UK',delete:'fa fa-trash' },
  { description: 'Matrix 3', createddate: '25-06-2020', finalizeddate: '25-06-2020', matrixgenerated: 'Yes',  save: 'fa fa-eye',facilityname: 'supply', country:'UK',delete:'fa fa-trash' },
  { description: 'Matrix 4', createddate: '25-06-2020', finalizeddate: '25-06-2020', matrixgenerated: 'Yes',  save: 'fa fa-eye',facilityname: 'supply', country:'UK',delete:'fa fa-trash' },
  { description: 'Matrix 5', createddate: '25-06-2020', finalizeddate: '25-06-2020', matrixgenerated: 'No',  save: 'fa fa-eye',facilityname: 'supply', country:'UK',delete:'fa fa-trash' },
  { description: 'Matrix 6', createddate: '25-06-2020', finalizeddate: '25-06-2020', matrixgenerated: 'Yes',   save: 'fa fa-eye',facilityname: 'supply', country:'UK',delete:'fa fa-trash' },

];


@Component({
  selector: 'app-managematrices',
  templateUrl: './managematrices.component.html',
  styleUrls: ['./managematrices.component.css']
})
export class ManagematricesComponent implements OnInit {

  constructor() {}
  
  displayedColumns: string[] = ['select', 'description', 'createddate', 'finalizeddate','facilityname','country', 'matrixgenerated', 'save', 'delete'];
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
  ngOnInit(): void {

  }

}
