import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
fileDetails;
n;
t;
d;
s;
all=[];
dummy;

  constructor() { }

  ngOnInit() {
  }

  
  getFileDetails (event) {
    for (var i = 0; i < event.target.files.length; i++) { 
      var name = event.target.files[i].name;
      var type = event.target.files[i].type;
      var size = event.target.files[i].size;
      var modifiedDate = event.target.files[i].lastModifiedDate;

      this.fileDetails = ('Name: ' + name + "\n" + 
                          'Type: ' + type + "\n" +
                          'Last-Modified-Date: ' + modifiedDate + "\n" +
                          'Size: ' + Math.round(size / 1024) + " KB"
                          );
                          this.n = name; 
                          this.t = type; 
                          this.d = modifiedDate; 
                          this.s = size; 
       
       this.all.push({
         "name": name,
          "type": type,
          "modifiedDate":modifiedDate,
          "size":size
       })
        console.log("Data : ", this.all);
    }
  }

}
