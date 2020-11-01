import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  @ViewChild('editModal') editModal: TemplateRef<any>;
  public CData: number;
  updatedItem;  
  newData: any = [];
  IsForUpdate: boolean = false;
  public elements={};
  public childData;

  constructor(private modal:NgbModal,private modalService: NgbModal) { }
  ngOnInit() {
  }
  eventHandler(event){
    this.childData = event;
   
}
EditItem(i) {  
  this.openModal();  
  this.elements = this.childData[i];
  this.updatedItem = i;  
  this.IsForUpdate = true;  
} 

UpdateItem() {  
  let data = this.updatedItem;  
  for (let i = 0; i < this.childData.length; i++) {  
    if (i == data) {  
      this.childData[i].value = this.newData.value;  
    }  
  }  
  this.IsForUpdate = false;  
  this.newData = {}; 
  this.closeModal();  
}  
openModal(){
  this.modal.open(this.editModal);
}
closeModal(){
  this.modalService.dismissAll();
}
DeleteItem(i) {  
  this.childData.splice(i, 1);  
}  
}






























































































