import { Injectable } from '@angular/core';
import {
  HttpInterceptor, HttpRequest, HttpHandler, HttpEvent
} from '@angular/common/http';

import {  Observable } from 'rxjs';


/**
 *  interceptor for API calls
 *  calls securityservice for getting authorization token
 */

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {

  constructor() { }

  /**
   *  initiates interceptor with http module
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlcwS1JINjRTSWJPUWJhN2g0LUtmMyJ9.eyJodHRwczovL25ld3NpbmJ1bGxldHMuYXBwL3V1aWQiOiI1NzU1MjczNS0zNzAwLTQ2YjYtOTFlYy0xNWQxOGQxMThkZmMiLCJodHRwczovL25ld3NpbmJ1bGxldHMuYXBwL2NyZWF0ZWRfYXQiOiIyMDIxLTAyLTAyVDA5OjAzOjQ1LjIyMVoiLCJodHRwczovL25ld3NpbmJ1bGxldHMuYXBwL2hhc1Bhc3N3b3JkIjp0cnVlLCJodHRwczovL25ld3NpbmJ1bGxldHMuYXBwL2VtYWlsIjoic2hyZXllc2hAbmV3c2luYnVsbGV0cy5hcHAiLCJpc3MiOiJodHRwczovL25pYi51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjAxOTE1NzE2ZTUxOWQwMDY5MzI5NWRmIiwiYXVkIjpbImh0dHBzOi8vYXBpLm5ld3NpbmJ1bGxldHMuYXBwIiwiaHR0cHM6Ly9uaWIudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY1NzYwMzE3MCwiZXhwIjoxNjYwMTk1MTcwLCJhenAiOiJYa1NZWG9QMHM1cjZtRFdYOG15eTBheDJDQjBySzQ5eCIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJwZXJtaXNzaW9ucyI6W119.au3k1YitMTtevyCLAULkbj9XcdABvL3Lrt7MWJzUuhxOUxSGhvVP4VLz2FmSq9KZwdV6GPEMXF2B8AS-XuQ9B0vQ-34jHe3Ehka6ta9I4mcLPQD8CvNuhXm28IjyZ0jAgQ_1xS39s7uZbChDJk9f1dIzI-KbS0G40ymGimKdK0SBPdUvyH7UXhnWgPsqMHTrcPKjXwmt6FdxIrEOvo4UW34NXB2NbQy1Eeg6Ywo4LSwTGUYbN_7hkJhkdwuX4DbpjtmIIv39qkE9ixxhkYNNsP2oQZ6EAmZBak4NmvMByetWF44ITpyfvddjuVXgKTUd2eqiFtmg6FXnffuTdp0zHA";
    // Add token to request header
    request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token)
    .set('x-user-email', 'shreyesh@newsinbullets.app')
   });
  return next.handle(request)

  }

}
