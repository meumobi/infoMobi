import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Comment } from '@models/comment';
import * as firebase from 'firebase';

@Injectable()
export class CommentsProvider {
  
  private itemsCollection: AngularFirestoreCollection<Comment>;
  items: Observable<Comment[]>;
  lastItem: any = null;

  constructor(private af: AngularFirestore) {}

  search(filters, loadMore = false): Observable<Comment[]> {
    this.itemsCollection = this.af.collection<Comment>('comments',
      ref => {
        let query : firebase.firestore.Query = ref;
        query = query.where('isPublished', '==', filters.isPublished);
        query = query.where('channel', '==', filters.channel);
        query = query.orderBy('published');
        if (this.lastItem && loadMore) {
          query = query.startAfter(this.lastItem);
        }
        query = query.limit(10);
        return query;
      }
    );   
    this.items = this.itemsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {       
        const data = a.payload.doc.data() as Comment;
        const id = a.payload.doc.id;
        this.lastItem = a.payload.doc;
        return { id, ...data };
      });
    });    
    return this.items;
  }

  delete(id: string) {
    return this.itemsCollection.doc(id).delete();
  }  

  update(id: string, changes: any) {
    return this.itemsCollection.doc(id).update(changes);
  }

  promote(comment) {
    let newComment = new Comment("Message");
    newComment.data = comment.data;
    return this.save(newComment);
  }

  save(comment: Comment) {
    console.log(comment); 
    var data = JSON.parse(JSON.stringify(comment));
    return this.itemsCollection.add(data);
  }

}
