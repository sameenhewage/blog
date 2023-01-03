import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article: Article | undefined;

  constructor(private activateRoute: ActivatedRoute, private articleService: ArticleService) {
  }
  async ngOnInit(): Promise<void> {
    this.getRouteArticleKey();
  }

  getRouteArticleKey() {
    this.activateRoute.params.subscribe(params => {
      const key = params['key'];
      this.getArticle(key);
    })
  }

  getArticle(key: string) {
    this.articleService.getArticle(key).subscribe(article => this.article = article);
    console.log(this.article);
  }

}
