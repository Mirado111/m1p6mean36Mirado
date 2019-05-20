import { Component, OnInit } from '@angular/core';
import { VideoService} from '../../services/video.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  playlists:Object[];
  name:String;
  nbr_playlist:Number;
  show:boolean;
  nbr_morceau:Number;
  constructor(
    private videoService:VideoService,
    private flashMessagesService:FlashMessagesService,
    private router:Router
    ){
      this.show=false;
      this.nbr_morceau=0;
      this.nbr_playlist=0;
     }

  ngOnInit() {
    this.show=true;
    this.videoService.getPlayList().subscribe(profile => {
      this.playlists = profile.playlist;
      this.show=false;
      console.log(this.playlists);
      this.nbr_playlist = this.playlists.length;
    },
    err => {
      this.show=false;
      console.log(err);
      return false;
    });
    this.videoService.getCountByUser().subscribe(data => {
      if(data.success){
        this.nbr_morceau = data.count;
      }else{
        console.log(data.err);
        this.nbr_morceau = 0;
      }
    });
   
  }
  onPlay(id_playlist){
    this.router.navigate(['/player/'+id_playlist+'/'+1]);
  }
  loadData(){
      this.show=true;
      this.videoService.getPlayList().subscribe(profile => {
        this.playlists = profile.playlist;
        this.show=false;
        this.nbr_playlist = this.playlists.length;
      });
      this.videoService.getCountByUser().subscribe(data => {
        if(data.success){
          this.nbr_morceau = data.count;
        }else{
          this.nbr_morceau = 0;
        }
      });
  }
  onNavigate(id_playlist){
    console.log(id_playlist);
    this.router.navigate(['/playlist/'+id_playlist]);
  }
  onAddSubmit(){
    this.show=true;
    const playlist={
      name: this.name
    }
    this.videoService.addPlayList(playlist).subscribe(data => {
      if(data.success){
        this.name=undefined;
        this.loadData();
      }else{
        this.flashMessagesService.show(data.msg, {cssClass: 'alert-primary', timeout: 3000});
      }
    });
  }
  onDeleteSubmit(id_playlist){   
    const id = {
      id_playlist: id_playlist
    };
    console.log(id);
    this.videoService.deletePlayList(id).subscribe(data => {
      if(data.success){
        this.loadData();
      }else{
        this.flashMessagesService.show(data.msg, {cssClass: 'alert-primary', timeout: 3000});
      }
    });
  }

}
