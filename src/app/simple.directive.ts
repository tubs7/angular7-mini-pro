import {Directive,ElementRef,HostListener} from '@angular/core';
import { Router } from '@angular/router';
@Directive({
  selector: '[appSimple]'
})
export class SimpleDirective {
//   @HostListener('click', ['$event']) onClick($event){
//     window.location.href = 'https://www.w3schools.com';
//     console.info('clicked: ' + $event);
// }
constructor(private el: ElementRef, private router: Router) { 
  el.nativeElement.style.color = 'red';
}
@HostListener('click', ['$event'])
clicked(event: Event) {
const url = this.el.nativeElement.href;
if (!url) {
return;
}
this.router.navigate(url);
}
 
  ngOnInit() {
  }
}
