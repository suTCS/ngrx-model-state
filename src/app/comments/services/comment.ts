import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Comment } from '../models/comment';

@Injectable()
export class CommentService {
  constructor(private http: Http) { }

  loadAll(): Observable<Comment[]> {
    console.log('CommentService.loadAll');
    return this.http.get('/api/comments')
      .map(res => res.json());
  }

  save(comment) {
    if (comment.id === 0) {
      return this.http.post('/api/comments', comment)
        .map(res => res.json());
    } else {
      return this.http.put('/api/comments/' + comment.id, comment)
        .map(res => res.json());
    }
  }
}
