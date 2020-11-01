import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  data: any = {};

  onSave() {
    console.log(this.data)
    // alert(JSON.stringify(this.data));
  }

}
