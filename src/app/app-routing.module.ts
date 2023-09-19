import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from "./components/posts/posts.component";
import {DetailComponent} from "./components/posts/detail/detail.component";

const routes: Routes = [
  {
    path: 'posts',
    children: [
      {path: '', component: PostsComponent},
      {path: 'detail/:id', component: DetailComponent},

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
