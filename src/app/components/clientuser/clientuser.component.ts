import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';

export interface UserData {
  name: string;
  organization: string;
  email: string;
  phonenumber: string;
  created: string;
  updated: string;
  delete: string;
  save: string;
}

const ELEMENT_DATA: UserData[] = [
  { name: 'Robin Singh', organization: 'IDH', email: 'robin@idh.com', phonenumber: '99875555789', created: 'Robin 12-06-2020', updated: 'Robin 25-06-2020', delete: 'fa fa-trash', save: 'fa fa-pencil-square-o' },
  { name: 'Ashutosh Samant', organization: 'IDH', email: 'robin@idh.com', phonenumber: '99875555789', created: 'Robin 12-06-2020', updated: 'Robin 25-06-2020', delete: 'fa fa-trash', save: 'fa fa-pencil-square-o' },
  { name: 'Saibal Chakraborty', organization: 'IDH', email: 'robin@idh.com', phonenumber: '99875555789', created: 'Robin 12-06-2020', updated: 'Robin 25-06-2020', delete: 'fa fa-trash', save: 'fa fa-pencil-square-o' },
  { name: 'Abhiram Samantara', organization: 'IDH', email: 'robin@idh.com', phonenumber: '99875555789', created: 'Robin 12-06-2020', updated: 'Robin 25-06-2020', delete: 'fa fa-trash', save: 'fa fa-pencil-square-o' },
  { name: 'Harish Verma', organization: 'IDH', email: 'robin@idh.com', phonenumber: '99875555789', created: 'Robin 12-06-2020', updated: 'Robin 25-06-2020', delete: 'fa fa-trash', save: 'fa fa-pencil-square-o' },
  { name: 'Rajesh Thakur', organization: 'IDH', email: 'robin@idh.com', phonenumber: '99875555789', created: 'Robin 12-06-2020', updated: 'Robin 25-06-2020', delete: 'fa fa-trash', save: 'fa fa-pencil-square-o' },

];



@Component({
  selector: 'app-clientuser',
  templateUrl: './clientuser.component.html',
  styleUrls: ['./clientuser.component.css']
})
export class ClientuserComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  
  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }

  displayedColumns: string[] = ['select', 'name', 'organization', 'email', 'phonenumber', 'created', 'updated', 'delete', 'save'];
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

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogElementsExampleDialog>) {}

  closeDialog(): void  {
    this.dialogRef.close();
  }
}
