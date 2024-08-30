const express = require('express');
const postController = require('../controllers/post.controller');

const router = express.Router();



router.post("/",postController.createArtists); 
router.post('/createuser',postController.createUser);
router.post('/genre' ,postController.createGenre);

router.post('/album', postController.createAlbum);

router.post('/merches', postController.createMerches);

router.post('/song', postController.createSong);

router.get('/',postController.getArtists);

router.get('/listalbum',postController.getAlbum);




module.exports = router;
