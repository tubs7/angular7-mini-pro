import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  name = 'Angular';
  constructor() { }

  ngOnInit() {
  }
  characters = [
      'Tuba',
      'XYZ',
      'PQR',
      'LMO',
      'TUVD'
    ]

}
