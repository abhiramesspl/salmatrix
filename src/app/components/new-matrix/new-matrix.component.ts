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
  jobCategories = ['Category1','Category2'];
  workAreas = ['Work Area 1','Work Area 2'];
  
  step=0;
  
  ngOnInit() {
    
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
  selectStep(data){
    this.step=data;
  }
}