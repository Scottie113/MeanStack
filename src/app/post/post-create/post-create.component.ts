import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

//import { Post} from "../post.model"; //do not need
import { PostService } from "../post.services";

@Component({
  selector:'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls:['./post-create.component.css']
})

export class PostCreateComponent {


 binding = '';
 enteredContent = '';
 enteredTitle = '';
//@Output() postCreated = new EventEmitter<Post>();// do not need anymore
constructor(public postsService: PostService){}

onAddPost(form: NgForm){
if(form.invalid){
  return;
}
// const post: Post = {
//   title: form.value.title,
//   content:form.value.content};//do not need anymore


//this.postCreated.emit(post);
this.postsService.addPost(form.value.title, form.value.content);
form.resetForm();
  }


}
