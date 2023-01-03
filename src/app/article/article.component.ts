import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article: Article | undefined;

  constructor(
    private activateRoute: ActivatedRoute,
    private articleService: ArticleService,
    private router: Router,
    private titleService: Title,
    private sharedService: SharedService,
    private meta: Meta
  ) {
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
    this.articleService.getArticle(key).subscribe(article => {
      if (article === undefined) {
        this.router.navigateByUrl('404');
      }
      this.article = article;
      this.titleService.setTitle(`${this.article.title} - ${this.sharedService.blogTitle}`);
      this.meta.addTags(
        [
          { name: "content", content: this.article.content },
          {
            property: "og:type",
            content: `website`
          },
          {
            property: "og:url",
            content: `${this.sharedService.baseUrl} ${this.article.key}`
          },
          {
            property: "og:image",
            content: `${this.article.imageUrl}`
          },
          {
            property: "og:description",
            content: `${this.article.description}`
          },
          {
            property: "og:site_name",
            content: `${this.sharedService.blogTitle}`
          }
        ]
      )
    });
  }

}
