const express = require('express'); 
const path = require('path'); 
const bodyParser = require('body-parser'); 
const cors = require('cors'); 
const passport = require("passport"); 
const mongoose = require('mongoose'); 
const config = require('./config/database');   
// Connection base de donnée 
mongoose.connect(config.database);
// Connexion établie
mongoose.connection.on('connected', function(){
    console.log("connected to database "+config.database);
});
// Connexion établie
mongoose.connection.on('error', function(err){
    console.log("Error database "+err);
});
const app = express(); 

const users = require('./routes/users');
const video = require('./routes/video');
const playlist = require('./routes/playlist');
const port = process.env.PORT || 8080; 

app.use(cors()); 

app.use(express.static(path.join(__dirname, 'public')));  

// Body parser middlewar 
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/video', video);
app.use('/playlist',playlist);
app.get('/',function(req,res){
    res.send('Invalide Endpoint');
});

app.get('*', function(req,res){
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () => {
    console.log('Server started on port '+port)
});