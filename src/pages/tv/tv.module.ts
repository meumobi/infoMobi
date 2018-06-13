import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TvPage } from './tv';
import { SharedModule } from '@shared/shared.module';
import { PostsProvider } from '@providers/posts';
import { CommentsProvider } from '@providers/comments';


@NgModule({
  declarations: [
    TvPage
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(TvPage),
  ],
  providers: [
    PostsProvider,
    CommentsProvider
  ]
})
export class TvPageModule {}
