import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  text: any = {
    Year: 'Year',
    Month: 'Month',
    Weeks: 'Weeks',
    Days: 'Days',
    Hours: 'Hours',
    Minutes: 'Minutes',
    Seconds: 'Seconds',
    MilliSeconds: 'MilliSeconds'
  };

  constructor() { }

  ngOnInit() {
  }

}
