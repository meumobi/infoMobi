import { Component, Input} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Comment } from '@models/comment.interface';
import { CommentsProvider } from '@providers/comments';

@Component({
  templateUrl: 'message.html',
  selector: 'message'
})
export class MessageComponent implements Comment {
  @Input() comment: any;
  rootNavCtrl: NavController;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private commentsService: CommentsProvider
  ) {
    this.rootNavCtrl = navParams.get('rootNavCtrl') || this.navCtrl;
  }

  deleteComment() {
    this.commentsService.delete(this.comment.id);
  }

  promoteComment() {
    this.commentsService.promote(this.comment);
  }

  pushDetailsPage(page: string, id: string) {
    if (id) {
      this.rootNavCtrl.push(page, {
        id: id,
        rootNavCtrl: this.rootNavCtrl
      });
    } else {
      console.log("missing id of author");
    }
  }
}