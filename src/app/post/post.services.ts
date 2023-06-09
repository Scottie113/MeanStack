import{ Injectable} from '@angular/core'
import { Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Post} from './post.model';
import {map} from 'rxjs/operators'


@Injectable({providedIn: 'root'})

// export interface Post{
//     id:string;
//     title: string;
//     content: string;
// }

export class PostService {
 private posts: Post[] = [];
 private postUpDate = new Subject<Post[]>()

 constructor(private http: HttpClient){}

 getPosts(){
    this.http.get<{message: string, posts: any}>('http://localhost:3000/api/posts')
    .pipe(map((postData)=>{
      return postData.posts.map(post =>{
        return {
          title: post.title,
          content: post.content,
          id: post._id
        }
      })
    }))
    .subscribe((transformedPost)=>{
    this.posts = transformedPost;
    this.postUpDate.next([...this.posts]);
  });

 }

 getPostUpdateListener(){
  return this.postUpDate.asObservable();
 }

 addPost(title: string, content: string){
  const post: Post ={id:null, title: title, content: content};
  this.http.post<{message:string, postId:string }>("http://localhost:3000/api/posts",post)
  .subscribe((responseData)=>{
   const id = responseData.postId
   post.id = id
    this.posts.push(post);
    this.postUpDate.next([...this.posts]);
  })

 }
deletePost(postId:string){
  this.http.delete("http://localhost:3000/api/posts/"+postId).subscribe(()=>{
    const updatedPost = this.posts.filter(post => post.id !==postId)
    this.posts = updatedPost
    this.postUpDate.next([...this.posts])
  })
}

}
