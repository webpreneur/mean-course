import { Component, OnInit } from "@angular/core";
import { Subscription } from 'rxjs';

/* INTERFACES */
import { Post } from '../post.model';

/* SERVICES */
import { PostService } from "../posts.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
/*   posts = [
    {title: 'First Post', content: 'This the first posts content'},
    {title: 'SECOND Post', content: 'This the SECOND posts content'},
    {title: 'THIRD Post', content: 'This the THIRD posts content'},
  ]; */
  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public postsService: PostService){}

  ngOnInit(){
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe( (posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy(){
    this.postsSub.unsubscribe();
  }

}
