import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.css']
})
export class DragComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  movies = [
    'Episode 1 - The Phantom Menace',
    'Episode 2 - Attack of the Clones',
    'Episode 3 - Revenge of the Sith',
    'Episode 4 - A New Hope',
    'Episode 5 - The Empire Strikes Back',
    'Episode 6 - Return of the Jedi',
    'Episode 7 - The Force Awakens',
    'Episode 8 - The Last Jedi'
  ];
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
}
