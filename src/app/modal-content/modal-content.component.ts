import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {
  // @Input() public user;
  public user = {
    // name: 'Tuba Shaikh',
    // age: 24
    }
    constructor(
      private modalService: NgbModal
      ) { }
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  passBack() {
    this.passEntry.emit(this.user);
    this.closeModal();
    }
    closeModal(){
      this.modalService.dismissAll();
    }
  ngOnInit() {
  }

}
