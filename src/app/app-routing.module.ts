import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostCreateComponent } from "./post/post-create/post-create.component";
import { PostListComponent } from "./post/post-create/post-list/post-list.component";

const routes: Routes = [
  {
    path:'', component: PostListComponent
  },
  {
    path:'create',component: PostCreateComponent
  }
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{

}
