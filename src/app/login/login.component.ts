import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });
  constructor() { }

  ngOnInit(): void {
  }

  submitLogin() {
    const username: string = this.loginForm.value.username;
    const password: string = this.loginForm.value.password;
  }

}
