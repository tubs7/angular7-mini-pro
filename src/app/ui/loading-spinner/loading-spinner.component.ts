import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent {
  showCard : boolean =false;
  constructor(private spinner: NgxSpinnerService) { }

  showSpinner() {
    this.showCard = true;
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
  }
}