import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'posts'
  },
  { path: 'posts', component: PostsComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}