import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
@ViewChild('editModal') editModal: TemplateRef<any>;
 // Array where we are going to do CRUD operations    
 myItems: MyItems[] = new Array();    
 // Other variables    
 IsForUpdate: boolean = false;    
 newItem: any = {};    
 updatedItem;  
 update = true;
 add = true;
constructor(private modal:NgbModal,private modalService: NgbModal) { 
   // Provide some values to the array    
     this.myItems.push(    
       new MyItems("First Value"),    
       new MyItems("Second Value"),    
      //  new MyItems("Third Value"),    
      //  new MyItems("Forth Value"),    
      //  new MyItems("Fifth Value")    
     );    
}
  colnames = ['values'];
  openModal(){
    this.modal.open(this.editModal);
  }

  AddItem() {
  this.openModal();  
  this.add = true; 
  this.update = false;  
  this.myItems.push(    
    this.newItem    
  );    
  this.newItem = {};  
  this.closeModal();  
} 

EditItem(i) {  
  this.openModal();  
  this.add = false; 
  this.update = false;  
  this.newItem.Value = this.myItems[i].Value; 
  console.log( "old value is :",this.newItem.Value );
  this.updatedItem = i;  
  this.IsForUpdate = true;  
}  
  
UpdateItem() {  
  let data = this.updatedItem;  
  for (let i = 0; i < this.myItems.length; i++) {  
    if (i == data) {  
      this.myItems[i].Value = this.newItem.Value;  
    }  
  }  
  this.IsForUpdate = false;  
  this.newItem = {}; 
  this.closeModal();  
} 
   
DeleteItem(i) {  
  this.myItems.splice(i, 1);  
}  
alert(){
  alert("test");
}

closeModal(){
  this.modalService.dismissAll();
}
  ngOnInit() {
  }
  
}
export class MyItems {    
  Value: string;    
  constructor(Value:string)    
  {    
    this.Value = Value;    
  }    
} 
    