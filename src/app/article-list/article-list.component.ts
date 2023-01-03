import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MockArticles } from '../data/mock-articles';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articles: Article[] = [];

  constructor(
    private articleService: ArticleService,
    private sharedService: SharedService,
    private titleService: Title,
  ) { }

  ngOnInit(): void {
    this.getArticles(); 
    this.titleService.setTitle(this.sharedService.blogTitle);
  }

  getArticles() {
    this.articleService.getArticles().subscribe((data: Article[]) => {
      this.articles = data;
    })
  }

}
