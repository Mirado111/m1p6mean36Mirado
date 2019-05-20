import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class VideoService {
  authToken: any; 
  playlist:any; 
  constructor(private http:Http) { }
  
    getDataObservable(url:string) {
        let headers= new Headers();
        headers.append('Content-Type','application/json'); 
        return this.http.get("video/information?url_video="+url,{headers: headers})
          .map(res => res.json());
        
    }
    getInformation(id:String){
        let headers= new Headers();
        headers.append('Content-Type','application/json'); 
        headers.append('Content-type','test/css'); 
        return this.http.get("video/informationId?id="+id,{headers: headers})
          .map(res => res.json());
    }
    getVideoOfPlayList(id_playlist){
      let headers = new Headers(); 
      headers.append('Content-Type', 'application/json');
      return this.http.post('video/getvideosplaylist',id_playlist,{headers:headers})
        .map(res => res.json());

    }
    deleteVideoOfPlayList(argument){
      let headers = new Headers(); 
      headers.append('Content-Type', 'application/json'); 
      return this.http.post('video/delete',argument,{headers:headers})
        .map(res => res.json()); 
    }
    addVideoOfPlayList(argument){
      let headers = new Headers(); 
      this.loadToken();
      headers.append('Content-Type', 'application/json'); 
      headers.append('Authorization', this.authToken); 
      return this.http.post('video/newvideo',argument,{headers:headers})
        .map(res => res.json()); 
    }
    addVideoOfPlayListYoutube(argument){
      let headers = new Headers(); 
      this.loadToken();
      headers.append('Content-Type', 'application/json'); 
      headers.append('Authorization', this.authToken); 
      return this.http.post('video/newvideoyoutube',argument,{headers:headers})
        .map(res => res.json()); 
    }
    getPlayListById(argument){
      let headers = new Headers(); 
      headers.append('Content-Type', 'application/json'); 
      return this.http.post('playlist/getPlayList',argument,{headers:headers})
        .map(res => res.json());
    }
    getPlayList(){
      let headers= new Headers();
      this.loadToken();
      headers.append('Authorization', this.authToken); 
      headers.append('Content-Type','application/json'); 
      return this.http.get('playlist/getplaylistuser',{headers: headers})
        .map(res => res.json());
    }
    loadToken(){
      const token = localStorage.getItem('id_token'); 
      this.authToken = token; 
    }
    addPlayList(playlist){
      let headers= new Headers();
      this.loadToken();
      headers.append('Authorization', this.authToken); 
      headers.append('Content-Type','application/json'); 
       return this.http.post('playlist/newplaylist', playlist,{headers: headers})
      .map(res => res.json());
    }
    deletePlayList(id){
        let headers= new Headers();
        headers.append('Content-Type','application/json'); 
        return this.http.post('playlist/deleteplaylist',id,{headers: headers})
          .map(res => res.json());
    }
    getCount(id_playlist){
      let headers = new Headers(); 
      headers.append('Content-Type','application/json');
      let argument = {id_playlist:id_playlist}; 
      return this.http.post('video/count',argument,{headers: headers})
        .map(res => res.json());
    }
    getCountByUser(){
      let headers= new Headers();
      this.loadToken();
      headers.append('Authorization', this.authToken); 
      headers.append('Content-Type','application/json'); 
      return this.http.get('video/countByUser',{headers: headers})
        .map(res => res.json());
    }
    search(argument){
      let headers= new Headers();
        headers.append('Content-Type','application/json'); 
        return this.http.post('video/search',argument,{headers: headers})
          .map(res => res.json());
    }
}

