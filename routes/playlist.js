const express = require('express'); 
const router = express.Router(); 
const passport = require('passport');
const config = require('../config/database');
const PlayList = require('../models/playlist');
const Video = require('../models/video');
const youtube = require('youtube-search');
//Register 
router.post('/newplaylist', passport.authenticate('jwt',{session:false}),(req,res,next)=>{
    const user = req.user;
    let playlist = new PlayList({
        id_user: user.id,
        name: req.body.name 
    });
    PlayList.addPlayList(playlist, function(err, playlist){
        if(err){
            res.json({success: false, msg:"Error when saving . "}); 
        }else{
            res.json({success: true, msg:'PlayList '+playlist.name+' saved .'}); 
        }
    });
});
router.post('/deleteplaylist',function(req,res,next){
    const id = req.body.id_playlist; 
    PlayList.deletePlayListById(id,function(err,playlist){
        if(err){
            res.json({success:false, msg:"Unable to delete playlist : "+err});
        }else{
            Video.deleteAllPlaylist(id,function(err){
                if(err){
                    res.json({success:false, msg:"Unable to delete playlist's song : "+err});
                }else{
                    res.json({success:true, msg:playlist.name+" deleted successfull ."});
                }
            })
            
        }

    });
});
router.get('/getplaylistuser',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
    const user = req.user;
    PlayList.findByUser(user.id,function(err,playlist){
        if(!err){
            return res.json({success:true, playlist:playlist});
        }else{
            return res.json({success:false});
        }
    }); 
});
router.post('/getplaylist',function(req,res,next){
    const id_playlist = req.body.id_playlist; 
    PlayList.getPlayListById(id_playlist,function(err, playlist){
        if(!err){
            return res.json({success:true, playlist:playlist});
        }else{
            return res.json({sucess:fale, msg:err});
        }
    });
});
router.post('/search',function(req,res,next){
    const key = req.body.key;
    var opts = {
        maxResults: 20,
        key: "AIzaSyC4Us7lmHs9H5g-pxuLFWmmlQ8oyGI6bGw"
      };
      youtube(key, opts, function(err, results) {
        if(err)res.json({success:false, msg:"Error during extraction : "+err});
        else{
            return res.json({success:true, results:results})
        }
      });
});

 module.exports=router;  