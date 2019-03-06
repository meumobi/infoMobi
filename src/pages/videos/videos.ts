import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmbedVideoService } from '@providers/videos/embed-video.service';
import { YoutubeService } from '@meumobi/ngx-youtube-provider';

@IonicPage()
@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html',
})
export class VideosPage implements OnInit {

  playlists: Array<any> = [];
  playlistId = '';
  videos: Array<any> = [];
  videoFrame: any;
  channelId: string;

  constructor(
    public navCtrl: NavController,
    private youtubeService: YoutubeService,
    private embedService: EmbedVideoService,
    public navParams: NavParams
  ) {}

  ngOnInit() {
    this.channelId = this.navParams.data.channelId;

    this.listVideos();
    this.listPlaylists();
  }

  listPlaylists() {
    this.youtubeService.fetchPlaylists(this.channelId)
    .then(
      data => {
        this.playlists = data;
        console.log(data);
      }
    );
  }

  listVideos() {
    console.log('listing videos');
    this.youtubeService.fetchVideos(this.channelId, this.playlistId)
    .then(
      data => {
        this.videos = data;
        if (data.length > 0) {
          this.openVideo(this.videos[0]);
        }
        console.log(data);
      }
    );
  }

  openVideo(video) {
    this.videoFrame = this.embedService.embed_youtube(video.id.videoId);
  }
}
