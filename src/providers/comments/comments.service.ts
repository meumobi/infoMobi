import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Comment } from '@models/comment.interface';
import * as firebase from 'firebase';

@Injectable()
export class CommentsProvider {
  
  private itemsCollection: AngularFirestoreCollection<Comment>;
  items: Observable<Comment[]>;

  constructor(private af: AngularFirestore) {}

  findAll(filters): Observable<Comment[]> {
    console.log(filters);
    this.itemsCollection = this.af.collection<Comment>('comments',
      ref => {
        let query : firebase.firestore.Query = ref;
        query = query.where('published', '==', filters.published);
        if (filters.postId) {
          query = query.where('postId', '==', filters.postId);
        } 
        if (filters.promoted) {
          query = query.where('promoted', '==', filters.promoted);
        }
        query = query.orderBy('priority')
        return query;
      }
    );
    this.items = this.itemsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Comment;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
    console.log(this.items);
    return this.items;
  }

  update(id: string, changes: any) {
    return this.itemsCollection.doc(id).update(changes);
  }

  save(comment: Comment) {
    comment.priority = 0 - Date.now();  
    console.log(comment); 
    return this.itemsCollection.add(comment);
  }

}
