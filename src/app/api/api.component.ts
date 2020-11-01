import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  // allImg = [
  //  {id:1,name: "../assets/cat1.jpg"},
  //  {id:2,name:"../assets/cat2.jpg"}
  // ]
  singers: Singer[] = [
    {
   'artist': 'Michael Jackson',
   'country': 'USA'
 },
 {
   'artist': 'Justin Bieber',
   'country': 'Canada'
 },
 {
   'artist': 'Daddy Yankee',
   'country': 'Purto Rico'
 },
 {
    'artist': 'A R Rehman',
     'country': 'India'
 },
 {
     'artist': 'Selena Gomez',
     'country': 'USA'
 }
];
  postList;
  userList;
  photosList;
  todosList;
  data;
  newList;
  constructor(public dataService:DataService) { }

  ngOnInit() {
    this.dataService.getPost().subscribe((post) =>{
      console.log(post);
      this.postList = post;
    });

    this.dataService.getUser().subscribe((user) =>{
      console.log(user);
      this.userList = user;
    });

    this.dataService.getPhotos().subscribe((photos) =>{
      console.log(photos);
      this.photosList = photos;
    });

    this.dataService.getTodos().subscribe((todos) => {
      console.log(todos);
      this.todosList = todos;
    });
    this.dataService.allUsers().subscribe((newUser) => {
      console.log(newUser);
      this.newList = newUser;
    });

  
  }
  


}
export default class Singer {
  artist: String;
  country: String;
}