import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  firstName = 'brian';
  lastName = 'cipriano';

  constructor() { }

  ngOnInit(): void {
  }

  doThis() {
    this.firstName = 'newfirst';
    this.lastName = 'newlast';
  }
}
