import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private _blogTitle = "SamDroidX Blog";
  
  public get blogTitle() {
    return this._blogTitle;
  }
  public set blogTitle(value) {
    this._blogTitle = value;
  }

  constructor() { }
}
