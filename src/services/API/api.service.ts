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
  categories = "categories/"
  artclesListLink = "articles/list/link"
  localhostUrl = "http://localhost:3000/"
  articlelinks = "articlelinks"
  ngrokUrl = "https://4077-37-245-2-28.in.ngrok.io/analytics/"
  scraper = "scraper"
  extractor = "extractor/"
  statuslist = "jobs/status/list/"
  countjobs = "jobs/status/count/all/"
  countjobsbyStatus = "jobs/status/count/"
  channel_type_youtube = "channel_type=Youtube"
  channel_type_instagram = "channel_type=instagram"


 
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

  updateCategory(id:string, data: any): Observable<any> {
    return this.http.patch(`${this.baseURL}${this.admin}${this.categories}${id}`, data);
  }

  getCategory(id:string): Observable<any> {
    return this.http.get(`${this.baseURL}${this.admin}${this.categories}${id}`);
  }
  deleteCategory(id:string): Observable<any> {
    return this.http.delete(`${this.baseURL}${this.admin}${this.categories}${id}`);
  }

  searchSource(searchKey: string){
    let data = {req: {keyword: searchKey, index_type: "sources"}, sort: []}
    return this.http.post(`${this.baseURL}${this.admin}search`, data);
  }

  getSourceTemplatePreview(data:any): Observable<any> {
    return this.http.post(`${this.baseURL}${this.engine}${this.article}comparefullarticletemplates`,data);
  }

  getSourceArticleLink(sourceid:string): Observable<any> {
    let params = new HttpParams().set("sourceid", sourceid)
    return this.http.get(`${this.baseURL}${this.admin}${this.artclesListLink}`,{params: params});
  }

  getListofTemplates(): Observable<any> {
    return this.http.get(`${this.baseURL}${this.engine}${this.article}listalltemplates`);
  }


  updateArticleClass(data: any): Observable<any> {
    return this.http.put(`${this.baseURL}${this.engine}${this.article}update_article_classes`, data);
  }

  // getSourceHeadlinePreview(data:any): Observable<any> {
  //   return this.http.post(`url`,data);
  // }

  getSourceHeadlinePreview(data:any): Observable<any> {
    // let params = new HttpParams().set("sourceid", sourceid)
    return this.http.post(`${this.localhostUrl}${this.articlelinks}`,data);
  }

  getYoutubeScraperNumber(): Observable<any> {
    return this.http.get(`${this.ngrokUrl}${this.scraper}?${this.channel_type_youtube}`);
  }


 
  // getScraperNumbers(channel_type: string, past_hours: number): Observable<any> {
  //   let params = new HttpParams().set("channel_type", channel_type)
  //   .set("past_hours", past_hours);
  //   return this.http.get(`${this.ngrokUrl}${this.scraper}?`,{params: params});
  // }
}
