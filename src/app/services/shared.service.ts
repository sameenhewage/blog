import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private _blogTitle = "SamDroidX Blog";
  private _baseUrl = "http://localhost:4200/";

  public get baseUrl() {
    return this._baseUrl;
  }
  public set baseUrl(value) {
    this._baseUrl = value;
  }

  public get blogTitle() {
    return this._blogTitle;
  }
  public set blogTitle(value) {
    this._blogTitle = value;
  }

  constructor() { }
}
