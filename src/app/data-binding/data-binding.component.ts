import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';  
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  @ViewChild('Modal') editModal: TemplateRef<any>;
  ID: number = 999;  
  Name: string = 'Tuba'; 
  fullName: string ='Tuba Shaikh';
  isDisabled: boolean = false; 
  bb :boolean = false;
  aa : boolean = true;
  allowNewServer = false;  
  data = '';  
  serverCreationStatus= 'No Server is created.';  
  smallLetters = 'my name is tuba';
  todaydate = new Date();
  months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',  
    'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']; 
    favoriteColor = '';
    servers = [];
    serverName = 'TestServer';  
    serverCreated = false;
    serverID: number = -2;  
    serverStatus: string = 'Offline';  
    singers: Singer[] = [
      {
     'artist': 'Michael Jackson',
     'country': 'USA'
   },
   {
     'artist': 'Justin Bieber',
     'country': 'Canada'
   },
   {
     'artist': 'Daddy Yankee',
     'country': 'Purto Rico'
   },
   {
      'artist': 'A R Rehman',
       'country': 'India'
   },
   {
       'artist': 'Selena Gomez',
       'country': 'USA'
   }
  ];
    constructor (private modal:NgbModal,private modalService: NgbModal) {  
      this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';  
      setTimeout(() =>{  
        this.allowNewServer = true;  
      }, 5000); 
    }  
   
 
    getServerStatus() {  
      return this.serverStatus;  
    }  
    getColor() {  
      return this.serverStatus === 'Online' ? 'green' : 'red';  
    }   
    favoriteColorControl = new FormControl('');  
    OnUpdate(event: Event) {  
    this.data = (<HTMLInputElement>event.target).value;  
  }  
  
  OnAddServer() {  
    this.servers.push('Another Server Added');  
  }  
  onRemoveServer(id: number) {  
    const position = id + 1;  
    this.servers.splice(position, 1);  
  } 
 onCreateServer(){
  this.allowNewServer = true;  
  this.serverCreationStatus = 'New Server is Created';
 }
 create() {  
  this.serverCreated = true;  
  this.serverCreationStatus = 'Server is created. Name of the server is' + this.serverName;  
}  
update(event: Event) {  
  this.serverName = (<HTMLInputElement>event.target).value;  
} 
check(){
    this.isDisabled = !this.isDisabled;
}
change(){
  if(this.aa){
  this.aa = false;
  this.bb = true;
  }else{
    this.aa = true;
  this.bb = false;
  }
}
openModal(){
  this.modal.open(this.editModal);
}
closeModal(){
  this.modalService.dismissAll();
}

  ngOnInit() {
  
  }

}

export default class Singer {
  artist: String;
  country: String;
}