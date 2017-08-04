import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieDbService {

  private apiKey = '451a5c46225283a9a3e766eee8fa80ac';
  private searchUrl:string;
  private popularUrl:string;
  private latestUrl:string;

  constructor(private _http:Http) {}

  search(query:string) {
      this.searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${query}`;
      return this._http.get(this.searchUrl)
                       .map(res => res.json());
  }

  getPopular() {
      this.popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&sort_by=popularity.desc`;
      return this._http.get(this.popularUrl)
                       .map(res => res.json());
  }
}
