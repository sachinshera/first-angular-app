import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  photos: { path: string; title: string; description: string; }[];
  students: { name: string; roll: number; marks: number; }[];
  // photos = ["assets/images/a.jpeg", "assets/images/b.jpeg", "assets/images/c.jpeg", "assets/images/d.jpg"];

  constructor() {
    this.photos = [
      {
        path: "assets/images/a.jpeg",
        title: "First photo",
        description: "First photo description"
      },
      {
        path: "assets/images/b.jpeg",
        title: "Second photo",
        description: "Second photo description"
      },
      {
        path: "assets/images/c.jpeg",
        title: "Third photo",
        description: "Third photo description"
      },
      {
        path: "assets/images/d.jpg",
        title: "Forth photo ",
        description: "Forth photo description"
      }
    ];
    this.students = [
      {
        name: "sachin",
        roll: 100,
        marks: 10
      },
      {
        name: "rahul",
        roll: 55,
        marks: 96
      },
      {
        name: "deepak",
        roll: 44,
        marks: 30
      },
      {
        name: "prashant ",
        roll: 11,
        marks: 88
      }
    ];
  }

  ngOnInit(): void {
  }


}
