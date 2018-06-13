import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Comment } from '@models/comment.interface';

@Injectable()
export class CommentsProvider {
  
  private itemsCollection: AngularFirestoreCollection<Comment>;
  items: Observable<Comment[]>;


  constructor(private af: AngularFirestore) {

  }

  findAll(): Observable<Comment[]> {
    this.itemsCollection = this.af.collection<Comment>('posts',
      ref => ref.where('published', '==', true).orderBy('priority')
    );
    this.items = this.itemsCollection.valueChanges();
    return this.items;
  }

  promote(id: string) {
    return this.itemsCollection.doc(id).update({
      published:true
    });
  }

  demote(id: string) {
    return this.itemsCollection.doc(id).update({
      published:false
    });
  }

  remove(id) {
    return this.itemsCollection.doc(id).delete();
  }

  findByPost(id): Observable<Comment[]> {
    this.itemsCollection = this.af.collection<Comment>('posts', 
      ref => ref.where('postId', '==', id)
    );
    this.items = this.itemsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Comment;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
    return this.items; 

  }

  save(comment: Comment) {
    comment.priority = 0 - Date.now();  
    console.log(comment); 
    return this.itemsCollection.add(comment);
  }

}
