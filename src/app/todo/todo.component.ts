import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo: any = [];
  input = new FormControl();
  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.todo.push(this.input.value);
    this.input.setValue("");
  }

  delete(data: any) {
    data.remove();
  }

}
