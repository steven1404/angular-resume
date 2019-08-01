import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  navItemTitle = "About Me"
  isStudent = true
  isHighlighted: boolean;

  onClick() {
    this.isStudent = false
  }

  toggleClick() {
    this.isStudent = !this.isStudent
  }

  toggleHighlighted(){
    this.isHighlighted = !this.isHighlighted
  }

  constructor() { }

  ngOnInit() {
  }

}
