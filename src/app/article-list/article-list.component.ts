import { Component, OnInit } from '@angular/core';
import { MockArticles } from '../data/mock-articles';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articles: Article[] = [];

  constructor(private articleService: ArticleService) {

  }

  ngOnInit(): void {
    this.getArticles()
  }

  getArticles() {
    this.articleService.getArticles().subscribe((data: Article[]) => {
      this.articles = data;
    })
  }

}
