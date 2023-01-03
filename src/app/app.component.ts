import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private sharedService: SharedService,
    private titleService: Title,
  ) {

  }

  ngOnInit(): void {
    this.titleService.setTitle(this.sharedService.blogTitle);
  }
  title = 'blog';
}
