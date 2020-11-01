import { Component, OnInit, ViewChild } from '@angular/core';
// import {NgxAutoScroll} from "ngx-auto-scroll";
import { IntervalObservable } from "rxjs/observable/IntervalObservable";


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  // @ViewChild(NgxAutoScroll) ngxAutoScroll: NgxAutoScroll;
  items = [];
  currentItem = 0;
  // item = ['aaaaaaa','aaaaaaa','aaaaaaa','aaaaaaa','aaaaaaa','aaaaaaa','aaaaaaa',
  // 'aaaaaaa','aaaaaaa','aaaaaaa','aaaaaaa','aaaaaaa','aaaaaaa','aaaaaaa','aaaaaaa','aaaaaaa','aaaaaaa',
  // 'aaaaaaa','aaaaaaa','aaaaaaa','aaaaaaa','aaaaaaa',
  // 'aaaaaaa','aaaaaaa','aaaaaaa','aaaaaaa','aaaaaaa','aaaaaaa','aaaaaaa','aaaaaaa',
  // 'aaaaaaa','aaaaaaa','aaaaaaa','aaaaaaa','aaaaaaa','aaaaaaa','aaaaaaa','aaaaaaa',
  // 'aaaaaaa','aaaaaaa','aaaaaaa','aaaaaaa','aaaaaaa','aaaaaaa','aaaaaaa','aaaaaaa','aaaaaaa','aaaaaaa'];

  constructor() { 
    this.getData();  
    IntervalObservable.create(200).subscribe(() => {
      if(this.currentItem<100)
      this.items.push(`Sample text: ${this.currentItem++}`)
    });
   }
  ngOnInit() {}
  getData() {  
    return this.TableHeader;  
 } 
//Create a object
public TableDetails: object = [];  
SearchTable(status: string) {
//filter on status
let obj = this.Tables.filter(m => m.Status == status);  
this.TableDetails = obj;  
return this.TableDetails;  
}  
  public TableHeader = [{ status: 'Active' }, { status: 'Pending'}, { status: 'Rejected' }];
  // Create array  
  public Tables = [  
    {Status:'Active', title: 'abc'},  
    { Status: 'Pending', title: 'xyz'},  
    { Status: 'Rejected', title: 'pqr'},  
    { Status: 'Active', title: 'stu'},  
    { Status: 'Active', title: 'lmn'},  
    { Status: 'Pending', title: 'hij'},  
    { Status: 'Pending', title: 'opq'},  
    { Status: 'Rejected', title: 'rfg'},  
    { Status: 'Pending', title: 'hnm'}  
    ];  
  //   public forceScrollDown(): void {
  //     this.ngxAutoScroll.forceScrollDown();
  // }
}
