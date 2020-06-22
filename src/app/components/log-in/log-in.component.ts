import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  hide = true;
  number1:number=Math.floor(Math.random() * 90 + 10);
  number2:number=Math.floor(Math.random() * 90 + 10);
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['/dashboard']);
  }
  refreshCaptcha(){
    this.number1=Math.floor(Math.random() * 90 + 10);
    this.number2=Math.floor(Math.random() * 90 + 10);
  }
}
