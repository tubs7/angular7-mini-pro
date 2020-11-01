import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun',
  templateUrl: './fun.component.html',
  styleUrls: ['./fun.component.css']
})
export class FunComponent implements OnInit {
  ngOnInit() {
  }
  // Used To Specify Title using Interpolation    
  title = 'Add Delete Update Function';    
    
  // Array where we are going to do CRUD operations    
  myItems: MyItems[] = new Array();    
  // Other variables    
  IsForUpdate: boolean = false;    
  newItem: any = {};    
  updatedItem;    
    
// To add new item in array    
AddItem() {    
  this.myItems.push(    
    this.newItem    
  );    
  this.newItem = {};    
} 
// When user selects edit option  
EditItem(i) {  
  this.newItem.Value = this.myItems[i].Value;  
  this.updatedItem = i;  
  this.IsForUpdate = true;  
}  
  
// When user clicks on update button to submit updated value  
UpdateItem() {  
  let data = this.updatedItem;  
  for (let i = 0; i < this.myItems.length; i++) {  
    if (i == data) {  
      this.myItems[i].Value = this.newItem.Value;  
    }  
  }  
  this.IsForUpdate = false;  
  this.newItem = {};  
} 
   
// To delete specific item  
DeleteItem(i) {  
  this.myItems.splice(i, 1);  
}  
alert(){
  alert("test");
}
  // Provide some values to the array    
  constructor()    
  {    
    this.myItems.push(    
      new MyItems("First Value"),    
      new MyItems("Second Value"),    
      new MyItems("Third Value"),    
      new MyItems("Forth Value"),    
      new MyItems("Fifth Value")    
    );    
  }  
     
}
export class MyItems {    
  Value: string;    
  constructor(Value:string)    
  {    
    this.Value = Value;    
  }    
} 