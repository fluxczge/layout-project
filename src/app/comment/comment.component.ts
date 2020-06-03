import { Feed } from './../models/feed';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  postList: Feed[] = [];
  feedForm = new FormGroup({
    feedName: new FormControl(''),
    feedPost: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  submitPost() {
    const feed = new Feed();
    feed.postName = this.feedForm.value.feedName;
    feed.postFeed = this.feedForm.value.feedPost;
    feed.postDate = new Date();
    this.postList.push(feed);
  }

}
