import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  languages: any= ['EN', 'FR'];
  selected:any = 'EN';
  constructor() { }

  ngOnInit(): void {
  }

}
