import { Component, OnInit } from '@angular/core';
import { MockArticles } from '../data/mock-articles';
import { Article } from '../models/article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit{

  articles : Article[] = [];

  constructor(){

  }

  ngOnInit(): void {
    this.articles = MockArticles;
    console.log(this.articles);
  }

}
