import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class BlogService{
    private readonly baseURL: string;

    postIdSource = new  BehaviorSubject<number>(0);
    postIdData: any;

    constructor(private http: HttpClient){
        this.baseURL ="https://jsonplaceholder.typicode.com/";
        this.postIdData= this.postIdSource.asObservable();
    }

    // getCategoryList(){
    //     let header = new HttpHeaders();
    //     header.append('Content-Type', 'applications/json');
    //     return this.http.get(this.baseURL + "getcategories", { headers: header})
    // }

    getPostList(){
        let header = new HttpHeaders();
        header.append('Content-Type', 'applications/json');
        return this.http.get(this.baseURL + "posts", { headers: header})
    }

    addPost(post: any){
        let header = new HttpHeaders();
        header.append('Content-Type', 'applications/json');
        return this.http.post(this.baseURL + "posts", post, { headers: header})
    }
    
    deletePost(postId: number){
        let header = new HttpHeaders();
        header.append('Content-Type', 'applications/json');
        return this.http.post(this.baseURL + "posts?postId="+postId, { headers: header})
    }

    updatePost(post: any){
        let header = new HttpHeaders();
        header.append('Content-Type', 'applications/json');
        return this.http.post(this.baseURL + "posts/1", post, { headers: header})
    }

    getPost(postId: number){
        let header = new HttpHeaders();
        header.append('Content-Type', 'applications/json');
        return this.http.get(this.baseURL + "posts?postId="+ postId, { headers: header})
    }

    changePostId(postId: number){
        this.postIdSource.next(postId);
    }
}