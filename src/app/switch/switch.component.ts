import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  radioSelected = [];
  radioSelectedName = [];

  countryForm: FormGroup;

  private selectedList: string=""; 
  private selectedValue: string="Number";        
  private selectedLink: string="One";   
  
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.countryForm = this.fb.group({
      countryControl: [this.countries[1]]
    });
  }
       
  setradio(e: string): void   
  {  
    this.selectedLink = e;  
  }  
    isSelected(name: string): boolean {  
        if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
            return false;  
    }  
    return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
  } 
    changeOpt(e){
    this.selectedValue = e;  
    console.log(this.selectedValue);
    }
    changeList(e){
    this.selectedList = e;  
    console.log("Selected No",this.selectedList);
    }
    
    addNewOption(name: string, code: string) {
      setTimeout(() => {
       this.countries = [
          {
            id: '8f8c6e98',
            name: 'USA',
            code: 'USD'
          },
          {  
            id: '169fee1a',
            name: 'Canada',
            code: 'CAD'
          },
          {
            id: '3953154c',
            name: 'UK',
            code: 'GBP'
          },
          {
            id: '68c61e29',
            name,
            code
          }
      ];
    this.countryForm.controls['countryControl'].patchValue(
         {id : '68c61e29', name, code}
      )
     }, 500)
    }
   
    compareFn(c1: any, c2:any): boolean {     
      return c1 && c2 ? c1.id === c2.id : c1 === c2; 
 }
    one = [  
      {name:'aaa'},  
      {name: 'bbb'},  
      {name: 'ccc'},  
      ];

      two = [  
        {name:'111'},  
        {name: '222'},  
        {name: '333'},  
        ];
       
          list1 = [
            {name:'1',value:'1'},
            {name:'11',value:'2'},
            {name:'111',value:'3'},
            ];
            list2 = [
              {name:'2',value:'1'},
              {name:'22',value:'2'},
              {name:'222',value:'3'},
              ];
            list3 = [
              {name:'3',value:'1'},
              {name:'33',value:'2'},
              {name:'333',value:'3'},
              ];
        countries = [{
          id: '8f8c6e98',
          name: 'USA',
          code: 'USD'
         },
         {
          id: '169fee1a',
          name: 'Canada',
          code: 'CAD'
         },
         {
          id: '3953154c',
          name: 'UK',
          code: 'GBP'
         }]

        onItemChange(item){
          this.radioSelected = item.value;
          this.radioSelectedName = item.name;
          console.log("selected Radio Value",this.radioSelected);
          console.log("selected Radio Name",this.radioSelectedName);
        }
     
}
