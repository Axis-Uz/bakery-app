import { Component, OnInit } from '@angular/core';

declare var error : any;

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.css']
})
export class ErrorpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new error();
  }

}
