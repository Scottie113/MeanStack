import {Component,  OnInit, OnDestroy} from "@angular/core";
import { Subscription } from "rxjs";


import {PostService} from '../../post.services'

import {Post} from "../../post.model";

@Component({
  selector: 'app-post-list',
  templateUrl:'./post-list.component.html',
  styleUrls:['./post-list.component.css']
})

export class PostListComponent implements OnInit, OnDestroy{

 posts: Post[]=[]; // do not need Input anymore
 private postsSub: Subscription;


constructor(public postsService: PostService) {

}
ngOnInit() {//change to handle the http request for our data
   this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts: Post[])=>{
      this.posts = posts;
    });

}

onDelete(postId: string){
  this.postsService.deletePost(postId)
}

ngOnDestroy(){
    this.postsSub.unsubscribe();
}

}
