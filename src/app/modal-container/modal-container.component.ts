import { Component, OnInit,Input, Output } from '@angular/core';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.css']
})

export class ModalContainerComponent implements OnInit {
  elements: any = [];
  colnames = ['ID', 'Name', 'Age', 'Action'];

  constructor(
    private modalService: NgbModal
    ) { }
    public user = {
      // name: 'Tuba Shaikh',
      // age: 24
      }
    openModal() {
      const modalRef = this.modalService.open(ModalContentComponent);
      modalRef.componentInstance.user = this.elements;
      modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
      console.log(receivedEntry);
      })
      }
      
      add(form) {
        if(form!==""){
        this.elements.push(form.value);
        console.log(form.value);
        }else{
          alert("Empty Field");
        }
      }
      reset(myform){
        myform.reset();
      }
      /*delete item*/
       deleteData(el,myform){
        console.log(el);
        for(let i=0;i<this.elements.length;i++){
          if(this.elements[i]==el){
          this.elements.splice(i,1);
          }
        }
        this.reset(myform);
      }
  ngOnInit() {
    console.log(this.user);
  }

}
