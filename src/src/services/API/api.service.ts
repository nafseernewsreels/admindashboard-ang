import { Injectable } from '@angular/core';
import {
  HttpClient, HttpParams
} from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class APIService {
  baseURL = "https://api.bullets.app/"
  admin = "admin/";
  engine = "engine/"
  source = "sources/"
  article = "article/"
  constructor(private http: HttpClient) { }

  getSourceData(pageSize: number, pageNo: number): Observable<any> {
    let params = new HttpParams().set("pageSize", pageSize)
    .set("pageNo", pageNo);
    return this.http.get(`${this.baseURL}${this.admin}${this.source}list`,{params: params});
  }

  getArticleCount(id:string): Observable<any> {
    return this.http.get(`${this.baseURL}${this.admin}${this.source}${id}/article_count`);
  }

  getCategories(id:string): Observable<any> {
    return this.http.get(`${this.baseURL}${this.admin}${this.source}${id}/categories`);
  }
  getSourceDetails(id:string): Observable<any> {
    return this.http.get(`${this.baseURL}${this.admin}${this.source}${id}/detail`);
  }
  getArticleTag(source:string): Observable<any> {
    let params = new HttpParams().set("source", source)
    return this.http.get(`${this.baseURL}${this.engine}${this.article}get_article_tags`,{params: params});
  }
  getArticleClass(source:string): Observable<any> {
    let params = new HttpParams().set("source", source)
    return this.http.get(`${this.baseURL}${this.engine}${this.article}get_article_classes`,{params: params});
  }

}