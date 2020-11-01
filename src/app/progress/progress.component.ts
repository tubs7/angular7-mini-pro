import { Component, OnInit } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  constructor(public ngProgress: NgProgress) { }

  ngOnInit() {
  }
  startProgress(){
    this.ngProgress.start();
  }
}
