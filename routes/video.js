const express = require('express'); 
const getVideoId = require('get-video-id');
const fetchVideoInfo = require('youtube-info');
const router = express.Router(); 
const Video = require('../models/video');
const PlayList = require('../models/playlist');
const passport = require('passport');
const youtube = require('youtube-search');

router.get('/information',function(req,res,next){
    const url = req.query.url_video; 
    var id = getVideoId(url).id;
    fetchVideoInfo(id, function (err, videoInfo) {
        if (err) throw new Error(err);
        return res.json(videoInfo);
    });
    
});
router.get('/informationId',function(req,res,next){
    const id = req.query.id; 
    fetchVideoInfo(id, function (err, videoInfo) {
        if (err) throw new Error(err);
        return res.json(videoInfo);
    });
});
router.post('/delete', function(req,res,next){
    const id_playlist = req.body.id_playlist; 
    const track = req.body.track; 
    Video.deleteVideo(id_playlist,track,function(err){
        if(id_playlist==undefined){
            return res.json({success:false, msg:"id playlist invalide"});
        }
        if(track==undefined){
            return res.json({success:false, msg:"track invalide"});
        }
        if(err) return res.json({success:false, msg:"impossible de supprimer le track "+err})
        else{
            Video.updateAfterDelete(id_playlist,track,function(err){
        
                if(err){
                    return res.json({success:false, msg:"impossible de mettre à jour les tracks invalide "+err});
                }else{
                    PlayList.deleteOneMusicPlayList(id_playlist, function(err){
                        if(err)return res.json({success:false, msg:"erreur lors de la mise à jour de la playliste "+err})
                        else{
                            return res.json({success:true, msg:"suppression et mise à jour réussi"});
                        }
                    });              
                }
            });
        }
    });
    
});
router.post('/count',function(req,res,next){
    const id_playlist = req.body.id_playlist; 
    Video.countByPlayList(id_playlist, function(err,value){
        if(err){
            return res.json({success:false, msg:"Impossible d'extraire les resultats "+err});
        }else{
            return res.json({success:true, count:count});
        }
    });
});
router.get('/countByUser',passport.authenticate('jwt',{session:false}),function(req,res,next){
    const user = req.user;
    const id_user = user._id;
    Video.countByUser(id_user, function(err,value){
        if(err){
            return res.json({success:false, msg:"Impossible d'extraire les resultats "+err});
        }else{
            return res.json({success:true, count:value});
        }
    });
});
router.post('/newvideo', passport.authenticate('jwt',{session:false}),function(req,res,next){

    const user = req.user;
    const id_playlist = req.body.id_playlist;
    const url = req.body.url;
    var id = getVideoId(url).id;
    fetchVideoInfo(id, function (err, videoInfo) {
        if(url==undefined) return res.json({success:false, msg:"url invalide"});
        if (err) return res.json({success:false, msg:err});
        else{
            console.log(videoInfo);
            const id_youtube = videoInfo.videoId;
            const titre = videoInfo.title;
            const genre = videoInfo.owner; 
            const duration = videoInfo.duration;
            const track= 0;
            const image = videoInfo.thumbnailUrl;
            let video = new Video({
                id_user: user.id,
                id_playlist: id_playlist,
                id_youtube: id_youtube,
                titre: titre,
                genre: genre,
                track:track,
                image:image
            }); 
            Video.countPlayList(id_playlist, function(err, count){
                if(err){
                    return res.json({success: false, msg:"Impossible de trouver la playlist "+err});
                } else{
                    PlayList.addOneMusicPlayList(id_playlist,function(err,val){
                        if(err) return res.json({success: false, msg:"Impossible de mettre à jour la playlist "+err});
                        else{
                            video.track = count+1;
                            Video.addVideo(video, function(err, video){
                                if(err){
                                    res.json({success: false, msg:"Erreur lors de l'enregistrement "+err}); 
                                }else{
                                    res.json({success: true, msg:'Video '+video.titre+' enregistrée'}); 
                                }
                            });
                        }
                       
                    });

                }
                    
            });
           
        }
    });
});
router.post('/newvideoyoutube', passport.authenticate('jwt',{session:false}),function(req,res,next){
    const user = req.user;
    const id_playlist = req.body.id_playlist;
    const id_youtube = req.body.id_youtube;
    const genre = req.body.genre;
    const titre = req.body.titre;
    const duration = req.body.duration;
    const image = req.body.image;
    const track = 0 ; 
    let video = new Video({
        id_user: user.id,
        id_playlist: id_playlist,
        id_youtube: id_youtube,
        titre: titre,
        genre: genre,
        track:track,
        image:image
    });   
    Video.countPlayList(id_playlist, function(err, count){
        if(err){
            return res.json({success: false, msg:"Impossible de trouver la playlist "+err});
        } else{
            PlayList.addOneMusicPlayList(id_playlist,function(err,val){
                if(err) return res.json({success: false, msg:"Impossible de mettre à jour la playlist "+err});
                else{
                    video.track = count+1;
                    Video.addVideo(video, function(err, video){
                        if(err){
                            res.json({success: false, msg:"Erreur lors de l'enregistrement "+err}); 
                        }else{
                            res.json({success: true, msg:'Video '+video.titre+' enregistrée'}); 
                        }
                    });
                }
                
            });

        }
            
    });
           
      
});
router.post('/getvideosplaylist', function(req,res,next){
    const id_playlist = req.body.id_playlist; 
    Video.findByPlayList(id_playlist,function(err, playlist){
        if(id_playlist==undefined){
            return res.json({success:false , msg:"identifiant playlist invalide"});
        }
        if(err) return res.json({success:false , msg:"erreur d'extraction des videos : "+err})
        else{
            return res.json({success:true, playlist:playlist});
        }
    });
})

router.post('/search',function(req,res,next){
    const key = req.body.key;
    var opts = {
        maxResults: 20,
        key: "AIzaSyBD8fT0RBMzZXs6if9EcMB1WYiENOBgg-o"
      };
      youtube(key, opts, function(err, results) {
        if(err)res.json({success:false, msg:"erreur lors de l'extraction des resultats "+err});
        else{
            return res.json({success:true, results:results})
        }
      });
});
module.exports=router;  