import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { VideoService} from '../../services/video.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  videos: Object[]; 
  search:any;
  id_playlist:String; 
  url:String;
  key:String;
  show:boolean;
  showData:boolean;
  onSave:boolean;

  constructor(
    private videoService:VideoService,
    private route: ActivatedRoute,
    private router:Router,
    private flashMessagesService:FlashMessagesService
  ){
    this.show=false;
    this.showData=false;
    this.onSave=false;
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id_playlist = params['id_playlist'];
      console.log(this.id_playlist);
    });
    this.loadData();
  }
  onPlay(track){
    this.router.navigate(['/player/'+this.id_playlist+'/'+track]);
  }
  loadData(){
    this.showData=true;
    const id_playlist = {"id_playlist":this.id_playlist}; 
    this.videoService.getVideoOfPlayList(id_playlist).subscribe(data => {
      if(data!=undefined){
        if(data.success){
            this.videos = data.playlist;
            this.showData=false;
        }else{
          this.router.navigate(['/home']);
          this.showData=false;
        }
      }
    });
  }
  loadDataBackground(){
    const id_playlist = {"id_playlist":this.id_playlist}; 
    this.videoService.getVideoOfPlayList(id_playlist).subscribe(data => {
      if(data!=undefined){
        if(data.success){
            this.videos = data.playlist;
            this.showData=false;
        }else{
          this.router.navigate(['/home']);
          this.showData=false;
        }
      }
    });
  }
  onAddSubmit(){
    this.onSave=true;
     const argument={
      id_playlist: this.id_playlist,
      url:this.url
    }
    this.videoService.addVideoOfPlayList(argument).subscribe(data => {
      this.showData=true;
      if(data.success){
        this.url=undefined;
        this.loadData();
        this.onSave=false;
    
      }else{
        this.showData=false;
        this.onSave=false;
        this.flashMessagesService.show(data.msg, {cssClass: 'alert-primary', timeout: 3000});
      }
    });
  }
  onAddYoutubeSubmit(url){
    this.onSave=true;
    url = url.dragData;
    const video = this.search[url];
    const argument={
      id_playlist: this.id_playlist,
      id_youtube: video.id,
      genre: video.channelTitle, 
      titre: video.title, 
      duration: video.duration,
      track:this.videos.length+1,
      image:video.thumbnails.default.url
    }
    this.videos.push(argument);
    this.videoService.addVideoOfPlayListYoutube(argument).subscribe(data => {
      if(data.success){  
        this.url=undefined;
        this.onSave=false;
        this.loadDataBackground();
      }else{ 
        this.flashMessagesService.show("Impossible d'enregistrer "+argument.titre+" dans la base",{cssClass: 'alert-primary', timeout: 3000});
        this.videos.splice(this.videos.indexOf(argument), 1);
        this.onSave=false;
      }
    });
  }
  onDeleteSubmit(id){
    this.onSave=true;
    const objectToDelete = this.videos[id];
    this.videos.splice(id,1);
    console.log(id);
    const argument= JSON.stringify(objectToDelete);
    console.log(objectToDelete);
    this.videoService.deleteVideoOfPlayList(argument).subscribe(data =>{ 
      if(data.success){
        this.onSave=false;
        this.loadDataBackground();
      }else{
        this.flashMessagesService.show("impossible de supprimer la video", {cssClass: 'alert-primary', timeout: 3000});
        this.videos.push(objectToDelete);
        this.onSave=false;
      }
    });

  }
  onSearchSubmit(){
    this.show=true;
    this.search=[];
    if(this.key!=undefined&&this.key!=""){
      const argument={
        key:this.key
      }
      this.videoService.search(argument).subscribe(data =>{
        if(data.success){
          this.search = data.results
          this.show=false;
        }else{
          console.log(data.msg);
          this.show=false;
        }
      });
    }
  }

}
