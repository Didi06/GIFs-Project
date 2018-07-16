const express = require('express');
const router = express.Router();

const giphyController = require('./../controllers/giphy-controllers');

const {
    getTrending,
    getSearch
} = require('./../controllers/giphy-controllers');


router.get('/trending', getTrending);
router.get('/search', getSearch);
router.get('');

module.exports = router;