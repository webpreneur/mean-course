import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent{
/*   posts = [
    {title: 'First Post', content: 'This the first posts content'},
    {title: 'SECOND Post', content: 'This the SECOND posts content'},
    {title: 'THIRD Post', content: 'This the THIRD posts content'},
  ]; */
  @Input() posts = [];
}
