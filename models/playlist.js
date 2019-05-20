const mongoose = require("mongoose");
const config = require('../config/database');

//PlayList schema 
const PlayListSchema = mongoose.Schema({
    id_user: {
        type: String
    },
    name: {
        type: String 
    },
    nombre:{
        type: Number 
    },
    date:{
        type: Date,
        require:true
    }
}); 

const PlayList = module.exports = mongoose.model('PlayLists', PlayListSchema);

module.exports.getPlayListById = function(id, callback){
    PlayList.findById(id,callback); 
};

module.exports.addPlayList = function(newPlayList,callback){
    if(newPlayList.name==undefined){
        newPlayList.name = "Unknown";
    }
    newPlayList.nombre = 0; 
    newPlayList.date = Date.now();
    newPlayList.save(callback);
}

module.exports.deletePlayListById = function(id_playlist, callback){
    
    PlayList.findByIdAndRemove(id_playlist,callback);
}
module.exports.addOneMusicPlayList = function(id_playlist,callback){
    const condition = {
        _id:id_playlist
    }
    const result = {$inc: { "nombre":1 }};
    PlayList.updateOne(condition,result,callback);
}
module.exports.deleteOneMusicPlayList = function(id_playlist,callback){
    const condition = {
        _id:id_playlist
    }
    const result = {$inc: { "nombre":-1 }};
    PlayList.updateOne(condition,result,callback);
}
module.exports.findByUser = function(id_user, callback){
    const query = {id_user: id_user};
    const sortQuery = {"date":-1};
    PlayList.find(query).sort(sortQuery).exec(callback);
}