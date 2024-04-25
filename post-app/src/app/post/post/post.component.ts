import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  posts: any = [];
  searchtext = '';
  constructor(
    private postService: PostService,
  ) {
  }
  ngOnInit() {
    this.getAllPosts()
  }

  getAllPosts(search?: string) {
    search = search ? search : 'all';
    this.postService.getAllPosts(search).subscribe((response: any) => {
      console.log(response)
      this.posts = response.posts;
    }, (err) => {
      console.error(err.error.message);
    })
  }
}
