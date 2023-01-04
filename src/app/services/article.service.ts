import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MockArticles } from '../data/mock-articles';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private baseURL = 'http://localhost:8000';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    const url = `${this.baseURL}/articles`;
    return this.http.get<Article[]>(url, { ...this.httpOptions });
    // const articles : Article[] = MockArticles;
    // return of(articles);
  }

  getArticle(key: string): Observable<Article> {
    // const articles : Article[] = MockArticles.filter(a=> a.key === key);
    // return of(articles[0]);

    const url = `${this.baseURL}/articles/${key}`;
    return this.http.get<Article>(url, { ...this.httpOptions });
  }

}
