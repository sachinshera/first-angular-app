import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  username = new FormControl();
  password = new FormControl();
  dob = new FormControl();
  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    alert(this.password.value);
  }

}
