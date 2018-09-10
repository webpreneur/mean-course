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

  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public postsService: PostService){}

  ngOnInit(){
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe( (posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy(){
    this.postsSub.unsubscribe();
  }

}
