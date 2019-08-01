import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional-details',
  templateUrl: './professional-details.component.html',
  styleUrls: ['./professional-details.component.css']
})
export class ProfessionalDetailsComponent implements OnInit {

  navItemTitle = "PROFESSIONAL DETAILS"

  details = ["John Doe", "38 Years", "Rome. Italy", "15 Years", "MBA"]

  constructor() { }

  ngOnInit() {
  }

}
