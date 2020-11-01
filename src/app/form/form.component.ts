import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  rang= "red";
  name:string;
  age:number;
  email:string;
  hobbies:string[];
  address:Address;
  post:Posts[];
  postList;
  isEdit : boolean = false;
  elements:any=[];
  newElement=[];
  a : boolean = false;
  // public id: number;
  // public heroName: string;
  heroes = [
    new Hero (11,'Windstorm'),
    new Hero (22,'Bombasto'),
    new Hero (33, 'Magneta'),
    new Hero (44, 'Tornado') ];
    myHero = this.heroes[0];
    
    myItems = [];
    newData ={
    //  name: 'Tuba Shaikh',age: 24
    };
    ab = ['a','b','c','d'];
    bc : any = {};
data;
prop;

  constructor() { }
  colorChange(color : string){
    this.rang = color;
  }
  submit(){
    console.log(this.elements);
    this.elements.push(this.newElement);
    console.log(this.newElement);
console.log("kk",this.elements.name);

  }
  editToggle(){
    this.isEdit = !this.isEdit;
  }
  toggle(){
    this.a = !this.a;
  }
  onclick(){
    
    console.log('HELLO');
    // var obj = { name : this.newData['name'], age : this.newData['age']}
    // const mapped = Object.keys(obj).map(key => ({type: name, value: obj[key]}));

    this.ab.push(this.bc);
    this.ab = this.bc;
    // this.myItems.push(obj);
    // this.data.emit(this.myItems); 
    console.log(this.bc);
    // Evil response in a variable. Here are all my vehicles.
let evilResponse = { 
  "car" : 
    { 
       "color" : "red",
       "model" : "2013"
    },
   "motorcycle": 
    { 
       "color" : "red",
       "model" : "2016"
    },
   "bicycle": 
    { 
       "color" : "red",
       "model" : "2011"
    }
}
// Step 1. Get all the object keys.
let evilResponseProps = Object.keys(evilResponse);
// Step 2. Create an empty array.
let goodResponse = [];
// Step 3. Iterate throw all keys.
for (this.prop of evilResponseProps) { 
    goodResponse.push(evilResponseProps[this.prop]);
    console.log("pp",this.prop);
}
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};
console.log("obj",Object.values(object1));

  }
  addTest(){
    this.hobbies.push('new hobby');
  }
  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;

  }
  deleteHobby(hobby){
    console.log(hobby);
    for(let i=0;i<this.hobbies.length;i++){
      if(this.hobbies[i]==hobby){
      this.hobbies.splice(i,1);
      }
    }
  }
  ngOnInit() {
    this.name='Tuba';
    // this.age=23;
    this.email='tuba.shaikh-ext@jci.com';
    this.hobbies=['Reading','writing','Music','Coding'];
    this.address = {
      city : 'Mumbai',
      state : 'Maharashtra'
    }
    
  }
  

}
interface Address{
  city:string;
  state:string;
}
interface Posts{
  userId:number;
  id:number;
  title:string;
  body:string;
}
export class Hero {
  constructor(
    public id: number,
    public name: string) { }
}