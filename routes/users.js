const express = require('express'); 
const router = express.Router(); 
const passport = require('passport'); 
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/users');
//Register 
router.post('/register', (req,res,next)=>{
    let newUser = new User({
        name: req.body.name, 
        lastname: req.body.lastname, 
        email: req.body.email, 
        password: req.body.password
    });
    User.getUserByEmail(newUser.email,function(err,user){
        if(user){
            return res.json({success:false, msg:"The email used is already assigned to another account"});
        }
        User.addUser(newUser, function(err, user){
            if(err){
                res.json({success: false, msg:"Erreur lors de l'enregistrement"}); 
            }else{
                res.json({success: true, msg:'Successfull'}); 
            }
        });
    });
    
    
});

//Authenticate 
router.post('/authenticate', (req,res,next)=>{
    const email = req.body.email; 
    const password = req.body.password; 
    User.getUserByEmail(email, function(err, user){
        if(err) throw err; 
        if(!user){
            return res.json({success:false, msg:"Incorrect username or password"});   
        }

        User.comparePassword(password, user.password, function(err, isMatch){
            if(err) throw err; 
            if(isMatch){
                const token = jwt.sign(user.toJSON(), config.secret,{
                    expiresIn: 604809
                });
                 res.json({
                     success: true, 
                     token: 'JWT '+token,
                     user: {
                         id: user._id,
                         name: user.name,
                         lastname: user.lastname, 
                         email:user.email
                     } 
                 });
            }else{
                return res.json({success: false, msg: 'Incorrect username or password' });
            }
        });
    });
});

//Profile 
router.get('/profile', passport.authenticate('jwt',{session:false}), (req,res,next)=>{
    res.json({user: req.user})
});


 module.exports=router;  