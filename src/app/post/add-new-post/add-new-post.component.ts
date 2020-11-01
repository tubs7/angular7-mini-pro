import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { BlogService } from '../../services/blog.service.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.css']
})
export class AddNewPostComponent implements OnInit {

  addNewPostForm: FormGroup;
  categories: any[] = [];
  event: EventEmitter<any>=new EventEmitter();

  constructor(private builder: FormBuilder, private blogService: BlogService, private bsModalRef: BsModalRef) {
    this.addNewPostForm = this.builder.group({
      category: new FormControl(null, []),
      title: new FormControl('', []),
      description: new FormControl('', [])
    });

    // this.blogService.getCategoryList().subscribe(data => {
    //   Object.assign(this.categories, data);
    // }
    // , error => { console.log('Error while gettig category data.'); });
  }

  onPostFormSubmit(){
    let postData = {
      'Title': this.addNewPostForm.get('title').value,
      'Description': this.addNewPostForm.get('description').value,
      // 'CategoryId': this.addNewPostForm.get('category').value,
      
    };

  
    this.blogService.addPost(postData).subscribe(data=>{
      console.log(data);
      if(data!=null && data>0){
        this.event.emit('OK');
        
      }
    });
    this.onClose();
  }

  onClose(){
    this.bsModalRef.hide();
  }

  ngOnInit() {
  }

}