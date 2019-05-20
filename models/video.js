const mongoose = require("mongoose");
const config = require('../config/database');
//PlayList schema 
const VideoSchema = mongoose.Schema({
    id_user: {
        type: String,
        require:true
    },
    id_playlist: {
        type:String,
        require:true
    },
    id_youtube:{
        type:String, 
        require:true
    }, 
    titre:{
        type:String,
    },
    genre:{
        type:String
    }, 
    track:{
        type:Number
    },
    image:{
        type:String
    }
}); 
const Video = module.exports = mongoose.model('Videos', VideoSchema);
module.exports.getVideoById = function(id, callback){
    Video.findById(id,callback); 
};
module.exports.countByPlayList = function(id_playlist, callback){
    const query = {id_playlist:id_playlist}; 
    Video.count(query,callback);
}
module.exports.countByUser = function(id_user, callback){
    const query = {id_user:id_user}; 
    Video.count(query,callback);
}
module.exports.addVideo = function(newVideo,callback){
    newVideo.save(callback);
}
module.exports.deletePlayListById = function(id_video, callback){
    Video.findByIdAndRemove(id_video,callback);
}
module.exports.deleteAllPlaylist = function(id_playlist, callback){
    const query = {id_playlist: id_playlist}; 
    Video.remove(query, callback);
}
module.exports.countPlayList = function(id_playlist, callback){
    const query = {id_playlist:id_playlist};
    Video.count(query,callback);
}
module.exports.deleteVideo = function(id_playlist,track, callback){
    const query = {
        id_playlist: id_playlist,
        track: track
    };
    Video.deleteOne(query, callback);
}
module.exports.findByPlayList = function(id_playlist, callback){
    const query = { id_playlist:id_playlist}; 
    const sortQuery = {"track":1};
    Video.find(query).sort(sortQuery).exec(callback);
};
module.exports.updateAfterDelete = function(id_playlist,track, callback){
    const condition = {
        track: {'$gt':track}, 
        id_playlist: id_playlist
    }
    const result = {$inc: { "track":-1 }};
    Video.updateMany(condition,result,callback);
}