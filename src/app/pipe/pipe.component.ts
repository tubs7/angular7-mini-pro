import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  doPush;
  doPop;
  doShift;
  doConcat;
  doSlice;
  
  birthday = new Date(1988, 3, 15); // April 15, 1988
  toggle = true; // start with true == shortDate

  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }

  constructor() { }

  ngOnInit() {
  }
 test1(){
          var obj = {1:0, 2:1, 'name':'Tuba', '':'Empty String'
        }
        console.log(obj[1], obj[2], obj['name'], obj['']);
 }
 test2(){
   var arr = [1,2,3,4];
   console.log(arr);
   console.log(arr.length);
 }
 test3(){
  var arr = [1,2,3,4];
   this.doPush = arr.push(5)
   console.log(this.doPush);
   console.log(arr);
 }
 test4(){
  var arr = [1,2,3,4];
   this.doPop = arr.pop();
   console.log(this.doPop);
   console.log(arr);
 }
 test5(){
  var arr = [1,2,3,4];
    this.doShift = arr.shift();
   console.log(arr);
 }
 test6(){
  var arr = [1,2,3,4];
   arr.reverse();
   console.log(arr);
 }
 test7(){
  var arr = [1,2,3,4];
   arr.sort();
   console.log(arr);
 }
 test8(){
  var arr = [1,2,3,4];
   this.doConcat = arr.concat(5,6);
   console.log(this.doConcat);
 }
 test9(){
  var arr = [1,2,3,4];
  console.log(arr);
   this.doSlice = arr.slice(0,2);
   console.log(this.doSlice);
   
 }
 test10(){
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(numbers);
  var every_result_is_smaller_than_9 = numbers.every(item=>item<9);
  console.log(every_result_is_smaller_than_9);
 }
 test11(){
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(numbers);
  var some_result_is_smaller_than_9 = numbers.some(item=>item<9);
  console.log(some_result_is_smaller_than_9);
 }
 test12(){
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(numbers);
  var odd_numbers= numbers.filter(item=>item % 2 == 1);
  console.log(odd_numbers);
 }
 test13(){
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(numbers);
  numbers.forEach(item=>console.log('Works'));
 }
 test14(){
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(numbers);
  var numbers_plus_one = numbers.map(item=>item + 1);
  console.log(numbers_plus_one);
 }
 test15(){
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(numbers);
  var total = numbers.reduce(function(sum, value) {
    return sum + value;
    }, 0);
    console.log(total);
  }
  test16(){
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(numbers);
    var concatenate = numbers.reduceRight((str, value) => str = str + value, '');
    console.log(concatenate); // '987654321'
 }
}
