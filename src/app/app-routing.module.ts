import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo: "/articles" },
  { path: 'articles', component: ArticleListComponent },
  { path: 'about', component: AboutComponent },
  { path: ':key', component: ArticleComponent },
  { path: ':key', component: ArticleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
