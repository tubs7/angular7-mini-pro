import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  feature = [{ id: 48, title: "Mango Juices", price: "30", category: "juices" }]; 
  selectedFeatures: any = [];
  fileUrl;
  myForm :FormGroup;
  private searchField: FormControl;
  itunes;
  loading;
  results;
  submittedData;
  myItems =[{ id: 48, title: "Mango Juices", price: "30", category: "juices" },
  { id: 49, title: "Apple Juices", price: "25", category: "juices" }];    
  newItem:any = [];
  constructor(private formBuilder: FormBuilder,private sanitizer: DomSanitizer) { }
  dummy:NewInterface[]=[
  {
      'name':'x','no':10
  },
  {
      'name':'y','no':20
  },  
  { 
      'name':'z','no':30
  },
];

  ngOnInit() {
    var obj = {name:'x',no:10};
    console.log("data",this.dummy);
    const data = 'some text for testing';
    const blob = new Blob([data], { type: 'application/octet-stream' });
    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
  
    this.searchField = new FormControl();
    this.results = this.searchField.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .do( () => this.loading = true)
      .switchMap( term => this.itunes.search(term))
      .do( () => this.loading = false )


      this.myForm = this.formBuilder.group({
        fname: [''],
        lname: ['']
      })
  }
 
  save(){
    this.submittedData =this.myForm.value;
    console.log(this.submittedData);
    console.log(this.myItems);
    this.newItem.push(    
      this.myItems   
    );    
    console.log("ppp",this.newItem);
  }
  onAdd() {
    this.selectedFeatures.push(this.feature);
    console.log("ppp",this.feature);
  }

  onRemove(){
    this.selectedFeatures.pop();
  }
 
  

}
export interface NewInterface{
name:string;
no:number;
}