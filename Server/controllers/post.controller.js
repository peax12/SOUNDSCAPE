const models = require('../models');
const bcrypt= require('bcrypt');


function createArtists(req,res){
    const post ={
        artistname : req.body.artistname,
        genre_id : req.body.genre_id,
        bio_content : req.body.bio_content,
        imageurl: req.body.imageurl
    };
    models.Artists.create(post,{
        fields : ['artistname', 'genre_id', 'bio_content', 'imageurl']
    }).then(result =>{
        res.status(201).json({
            message:'artists added',
            post: result
        });
    }).catch(error =>{
        res.status(501).json({
            message: 'error',
            error : error
        });

    });

};

function createGenre(req,res){
    const post ={
        genre_name : req.body.genre_name,
       
    };
    models.Genre.create(post,{
        fields : ['genre_name']
    }).then(result =>{
        res.status(201).json({
            message:'NEW GENRE ADDED!',
            post: result
        });
    }).catch(error =>{
        res.status(501).json({
            message: 'error',
            error : error
        });

    });

};

function createAlbum(req,res){
    const post ={
        artist_id : req.body.artist_id,
        albumname : req.body.albumname,
        albumCover : req.body.albumCover,
        price : req.body.price
       
    };
    models.Album.create(post,{
        fields : [ 'artist_id','albumname','albumCover','price']
    }).then(result =>{
        res.status(201).json({
            message:'NEW Album ADDED!',
            post: result
        });
    }).catch(error =>{
        res.status(501).json({
            message: 'error',
            error : error
        });

    });

};

function createSong(req,res){
    const post ={
        artist_id: req.body.artist_id,
        album_id: req.body.album_id,
     
        songname : req.body.songname,
        length: req.body.length,
        price: req.body.price,
        tracknumber: req.body.tracknumber,
        songfile: req.body.songfile
       
    };
    models.Song.create(post,{
        fields : [ 'artist_id','album_id','songname','length','price','tracknumber','songfile']
    }).then(result =>{
        res.status(201).json({
            message:'NEW SONG ADDED!',
            post: result
        });
    }).catch(error =>{
        res.status(501).json({
            message: 'error',
            error : error
        });

    });

};

function createMerches(req,res){
    const post ={
        genrename : req.body.genrename,
       
    };
    models.Merch.create(post,{
        fields : [artist_id,album_id, price]
    }).then(result =>{
        res.status(201).json({
            message:'NEW MERCH ADDED!',
            post: result
        });
    }).catch(error =>{
        res.status(501).json({
            message: 'error',
            error : error
        });

    });

};

async function createUser(req,res){
  try { 
      const logindetails ={
          username: req.body.username,
          password :  await bcrypt.hash(req.body.password,10)
        };

        
        const UserCreation = await models.UserLogin.create(logindetails,{
             fields: ['username', 'password']
  
        });
        
        const customerdetails ={
            fname : req.body.fname,
            lname : req.body.lname,
            e_mail : req.body.e_mail,
            birthDate: req.body.birthDate,
            profilephoto: req.body.profilephoto
        };
        
  
        const CustomerInfo = await models.CustomerInfo.create(customerdetails,{
          fields: ['fname','lname','e_mail','birthDate', 'profilephoto']
      });
      res.status(201).json({
        message: 'User created successfully',
        logindetails: UserCreation,
        customerdetails: CustomerInfo
    });


    } catch (error) {
        res.status(501).json({
            message: error,
            customerdetails : error
        })
        
    }

};

async function getArtists(req, res){
    try {
      const artists = await models.Artists.findAll();
      res.json(artists);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving users', error });
    }
  };

async function getAlbum(req,res){
    try {
        const albums = await models.Album.findAll();
        res.json(albums);
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching data',
            error: error,
        });
        
    }
};

async function filterbygenre(req,res){
    try{
        const genre = await models.Genre.findAll();
        res.json(artiists_in_genre);

    }catch(error){
        res.status(500).json({
            message:'Error fetching data',
            error: error
        });
    }
};


async function Artistdetails(req, res) {
    try {
        const artist = await models.Artist.findByPk(req.params.id, {
            include: [
                { 
                    model: models.Album, 
                    as: 'albums',
                    include: [{ model: models.Song, as: 'songs' }]
                },
                { model: models.Song, as: 'songs' }
            ],
        });

        if (artist) {
            res.json(artist);
        } else {
            res.status(404).json({ message: 'Artist not found' });
        }
    } catch (error) {
        console.error('Error fetching artist details:', error);
        res.status(500).json({ message: 'Server error' });
    }
};




module.exports = {
    createArtists:createArtists,
    createGenre : createGenre,
    createAlbum : createAlbum,
    createSong : createSong,
    createMerches : createMerches,
    createUser:createUser,
    getArtists: getArtists,
    getAlbum: getAlbum,
    Artistdetails: Artistdetails



};