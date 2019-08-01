import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {

  navItemTitle = "RESUME"
  btnText = "Edit Resume"
  btnColor = "blue"

  onClick() {
    this.btnText = "Save Changes"
    this.btnColor = "green"
  }

  constructor() { }

  ngOnInit() {
  }

}
