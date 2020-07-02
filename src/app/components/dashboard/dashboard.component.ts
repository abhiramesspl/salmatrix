import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

export interface UserData {

  matrix: string;
  name: string;
  mgenerate: string;
  cdate:string;
  fdate:string;
}
/** Constants used to fill up our data base. */

const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

const CDATES: string[] = [
  '11-06-2019', '12-06-2020', '12-06-2020', '12-06-2020', '12-06-2020', '12-06-2020', '12-06-2020', '12-06-2020', '12-06-2020', '12-06-2020',
  '12-06-2020', '12-06-2020', '12-06-2020', '12-06-2020', '12-06-2020', '12-06-2020', '12-06-2020', '12-06-2020', '12-06-2020'
];

const FDATES: string[] = [
  '11-06-2019', '12-06-2020', '12-06-2020', '12-06-2020', '12-06-2020', '12-06-2020', '12-06-2020', '12-06-2020', '12-06-2020', '12-06-2020',
  '12-06-2020', '12-06-2020', '12-06-2020', '12-06-2020', '12-06-2020', '12-06-2020', '12-06-2020', '12-06-2020', '12-06-2020'
];

const MGENERATED: string[] = [
  'Yes', 'Yes', 'Yes',  'Yes','No', 'No', 'Yes'
];
const MATRICES: string[] = [
  'Matrix1', 'Matrix2', 'Matrix3',  'Matrix4','Matrix5', 'Matrix6', 'Matrix7'
];


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
 
  languages: any= ['EN', 'FR'];
  selected:any = 'EN';
  
  displayedColumns: string[] = ['matrix', 'cdate', 'fdate', 'name', 'mgenerate'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  constructor() {
     // Create 100 users
     const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

     // Assign the data to the data source for the table to render
     this.dataSource = new MatTableDataSource(users);
   }

  ngOnInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
  const cdate = CDATES[Math.round(Math.random() * (CDATES.length - 1))];

  const fdate = FDATES[Math.round(Math.random() * (FDATES.length - 1))];
  const mgenerate = MGENERATED[Math.round(Math.random() * (MGENERATED.length - 1))];
  const matrix = MATRICES[Math.round(Math.random() * (MATRICES.length - 1))];

  return {
    matrix: matrix,
    name: name,
    cdate: cdate,
    mgenerate: mgenerate,
    fdate:fdate
  };
}


