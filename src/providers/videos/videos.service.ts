import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENV } from '@env';

@Injectable()
export class VideosService {

  apiKey: string;
  channel = 'UCRGoQtYFZCkbBegdlv8xWew';

  constructor(public http: HttpClient) {
    console.log('Hello VideosService Provider');
    this.apiKey = ENV.youtube.apiKey;
  }

  async fetchPlaylists() {
    let url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${this.channel}&key=${this.apiKey}`;
    return this.http.get(url).toPromise()
    .then(
      data => {
        return data["items"]
      }
    );
  }

  async fetchVideos(playlist: string) {
    let url = `https://www.googleapis.com/youtube/v3/search?key=${this.apiKey}&channelId=${this.channel}&part=snippet,id&order=date&maxResults=20`;
    if (playlist != "") {
      url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${this.apiKey}&playlistId=${playlist}&part=snippet,id&order=date&maxResults=20`;
    }
    return this.http.get(url).toPromise()
    .then(
      data => {
        return data["items"]
      }
    );
  }

}
