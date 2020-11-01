import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  @Output() data: EventEmitter<any> = new EventEmitter<any>();
  myItems = [];
  newData ={};
  
  constructor() { }
  // save(value) {
  //   this.childEvent.emit(value);
  // }
  AddItem(f){
    console.log("submitted value :",this.myItems);
    var obj = { name : this.newData['name'], age : this.newData['age']}
    this.myItems.push(obj);
    this.data.emit(this.myItems);    
    this.reset(f);
  } 
  reset(f:any){
    f.reset();
  }
  ngOnInit() {
  }
 
}
