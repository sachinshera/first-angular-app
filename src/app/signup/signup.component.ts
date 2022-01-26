import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  signupForm = new FormGroup({
    p_info: new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      phone: new FormControl()
    }),
    address_info: new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      country: new FormControl()
    })
  });

  submitSignUp() {
    console.log(this.signupForm.value);
  }


}
