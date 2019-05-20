import { Component, OnInit  } from '@angular/core';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { VideoService } from '../../services/video.service';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  informationPlaylist:object;
  player: YT.Player;
  playlist:any; 
  id:String;
  id_playlist:String;
  titre: String;
  description:String;
  img:String;
  track:number;
  isPlay:boolean;
  private sub: any;
  savePlayer (player) {
    this.player = player;
    this.player.playVideo();
    this.isPlay=true;
  }
  next(){
    var one = 1;
    var index = +this.track + +one;
    console.log("index "+index);
    if(index<=this.playlist.length){
      this.router.navigate(['/player/'+this.id_playlist+'/'+index]);    
      this.id=undefined;   
    }
  }
  nextManuel(event){
    this.router.navigate(['/player/'+this.id_playlist+'/'+event.dragData]);    
      this.id=undefined;   
  }
  nextManualClick(track){
    this.router.navigate(['/player/'+this.id_playlist+'/'+track]);    
    this.id=undefined;   
  }
  changeEvent(){
    if(this.isPlay){
      this.player.pauseVideo(); 
      this.isPlay=false;
    }else{
      this.player.playVideo();
      this.isPlay=true;
    }
  }
  previouse(){
    var one = 1;
    var index = +this.track - +one;
    console.log("index "+index);
    if(index>0){
      this.router.navigate(['/player/'+this.id_playlist+'/'+index]);    
      this.id=undefined;   
    }
  }
  onStateChange(event){
    console.log('player state', event.data);
    if(event.data==0){
      this.next()
      
    }
  }
  
  
  constructor(private videoService:VideoService,private route: ActivatedRoute,private router:Router) { 
  }
  ngOnInit() {
    var index=0;
    this.id=undefined;
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.id_playlist = params['id_playlist'];
      this.track = params['track'];

      index= +this.track-1;
      const id_playlist = {"id_playlist":this.id_playlist}; 
      this.videoService.getVideoOfPlayList(id_playlist).subscribe(data => {
        if(data!=undefined){
          if(data.success){
            this.playlist = data.playlist;
            const video = this.playlist[index];  
            this.id = video.id_youtube;
            this.titre = video.titre;
            this.description = video.genre;
            this.img = video.image;
          } else{
            console.log(data.msg)
          }
        }
      });
      this.initInformation();
      
    });  
  }
  initInformation(){
    var argument = {
      id_playlist:this.id_playlist
    }
    this.videoService.getPlayListById(argument).subscribe(data =>{
      if(data.success){
        this.informationPlaylist = data.playlist;
      }
    })
  }
  onClickPlayList(){
    this.router.navigate(['/playlist/'+this.id_playlist]);
  }
  

}
