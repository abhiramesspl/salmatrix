import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  languages: any= ['EN', 'FR'];
  selected:any = 'EN';
  constructor() { }

  ngOnInit(): void {
  }

}
