import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient){ 
    console.log('dataService is Connected');
  }
  
getPost(){
   return this.http.get('../../assets/posts.json');
}

getUser(){
  return this.http.get('../../assets/emp.json');
}

getPhotos(){
  return this.http.get('../../assets/photos.json');
}

getTodos(){
  return this.http.get('../../assets/todos.json');
}
allUsers(){
  return this.http.get("../../assets/user.json");
}

getChats(CMRequestID){
  return this.http.get<any>("http://localhost:57927/api/CreditMemoTracking/GetRootCauseByCMRequestID,CMRequestID");
}

// Aese krte h post API 
// postTodos(id){
//   return this.http.get('https://jsonplaceholder.typicode.com/todos',id);
// }
}