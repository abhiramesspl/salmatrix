import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-matrix',
  templateUrl: './new-matrix.component.html',
  styleUrls: ['./new-matrix.component.css']
})
export class NewMatrixComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) {}
  languages: any= ['EN', 'FR'];
  selected:any = 'EN';
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  step=0;
  
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  wizardPrev(){
    this.step--;
  }
  wizardNext(){
    this.step++;
  }
  saveMatrix(){
    alert("Saved");
  }
}