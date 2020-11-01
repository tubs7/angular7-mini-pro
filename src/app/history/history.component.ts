import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  showData;
  dummy;
  constructor() { }

  ngOnInit() {
  }
  view(data) {
    console.log("Selected item data: ", data);
    // var data = this.history[id];
    // console.log("Selected item data: ", data);
    // var show = this.showData;
    // if(this.history == show){
    this.showData =data;
    console.log("showData item data: ",this.showData);
    // }
}
handleClick(event: Event) {
  console.log('Click!', event);
  this.dummy = true;
}
// Create array  
public history = [  
  {id:'1', name:'aaa', title: 'abc'},  
  {id:'2', name: 'bbb', title: 'xyz'},  
  {id:'3', name: 'ccc', title: 'pqr'},  
  ];
}
