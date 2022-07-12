import { Injectable } from '@angular/core';
import {
  HttpClient
} from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class APIService {
  apiurl = "https://api.bullets.app/admin/sources/list?perpage=50&page=1";
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.apiurl);
  }
}
