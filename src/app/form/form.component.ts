import { Person } from '../models/person';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  p1: Person[] = [];
  // p2 = new Person(2, 'bbm', 'c');

  personForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });

  constructor(
  ) { }

  ngOnInit(): void {
    this.p1.push({id: 0, firstName: 'brian', lastName: 'cipriano' } as Person);
    this.p1.push({id: 1, firstName: 'bobby', lastName: 'cipriano2' } as Person);
  }

  submitPerson() {
    this.p1.push({
      id: this.p1.length,
      firstName: this.personForm.value.firstName,
      lastName: this.personForm.value.lastName
    });
  }
}
