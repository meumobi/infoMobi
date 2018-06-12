import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Post } from '@models/post.interface';
import { PostsProvider } from '@providers/posts';

/**
 * Generated class for the PostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class PostsPage {

  posts: Array<Post>;
  fakePosts: Array<any> = new Array(5);
  rootNavCtrl: NavController;

  constructor(
    private postsProvider: PostsProvider,
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
      this.listArticles();
      this.rootNavCtrl = navParams.get('rootNavCtrl');

  }

  listArticles(refresher = null) {
    this.postsProvider.findAll()
    .then(
      data => {
        this.posts = data;
        if (refresher) {
          refresher.complete();
        }
      })
    .catch(
      err => {
        console.log(err);
      }
    );
  }

  pushDetailsPage(page: string, id: string) {
    this.rootNavCtrl.push(page, {
      id: id,
      rootNavCtrl: this.rootNavCtrl
    });
  }

}
