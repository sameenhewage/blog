import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MockArticles } from '../data/mock-articles';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getArticles(): Observable<Article[]>{
    const articles : Article[] = MockArticles;
    return of(articles);
  }

  getArticle(key: string) : Observable<Article> {
    const articles : Article[] = MockArticles.filter(a=> a.key === key);
    return of(articles[0]);
  }

}
