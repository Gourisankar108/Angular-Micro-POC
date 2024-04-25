import { Injectable } from '@angular/core';
import { HttputilityService } from './httputility.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private httpService: HttputilityService) { }
  getAllPosts(search?: string) {
    const searchquery = search ? '/search?q=' + search : ''
    return this.httpService.get('posts' + searchquery);
  }
}
