import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
interface Food {
  value: string;
  viewValue: string;
}
interface Transportation {
  value: string;
  viewValue: string;
}
interface Housing {
  value: string;
  viewValue: string;
}
interface Healthcare {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-addmatrix',
  templateUrl: './addmatrix.component.html',
  styleUrls: ['./addmatrix.component.css'],
  
})



export class AddmatrixComponent implements OnInit {

  foods: Food[] = [
    {value: 'yes-0', viewValue: 'Yes'},
    {value: 'No-1', viewValue: 'No'},
  ];

  transportation: Transportation[] = [
    {value: 'yes-0', viewValue: 'Yes'},
    {value: 'No-1', viewValue: 'No'},
  ];

  housing: Housing[] = [
    {value: 'yes-0', viewValue: 'Yes'},
    {value: 'No-1', viewValue: 'No'},
  ];

  healthcare: Healthcare[] = [
    {value: 'yes-0', viewValue: 'Yes'},
    {value: 'No-1', viewValue: 'No'},
  ];

  transport = false;
  
  panelOpenState = false;
  
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
  }

}
