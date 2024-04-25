import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttputilityService {

  constructor(private http: HttpClient) { }

  public post(url: string, data?: any, optional?: any): Observable<any> {
    return this.http.post(environment.baseURL + url, data, optional);
  }

  public get(url: string, optional?: any): Observable<any> {
    return this.http.get(environment.baseURL + url, optional);
  }

  public put(url: string, data?: any, optional?: any): Observable<any> {
    return this.http.put(environment.baseURL + url, data, optional);
  }
  public delete(url: string, optional?: any): Observable<any> {
    return this.http.delete(environment.baseURL + url, optional);
  }
}
