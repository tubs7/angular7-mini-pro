import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail',
  // properties: ['color: sampleColor'],
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  mailContent;
  subject = "test Mail";
  message = "This is Teting Mail";  
  htmlStr: string = '<strong>'+this.message+'</strong> &amp; the Hare';

  sendMail(){
    this.mailContent = "mailto:tuba.shaikh-ext@jci.com,abc@gmail.com?cc=shaikhtuba95@gmail.com,xyz@jci.com&subject="+this.subject+"&body="+this.message;
    window.location.href= this.mailContent;
  }
  constructor() { }
  ngOnInit() {
  }
}
