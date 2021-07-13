const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req,res) => {
    res.send('Helloooo World. This is me.');
});

router.get('/second', (req,res) => {
    res.send('Second Hello World.');
});

router.post('/', (req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    post.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({ message: err});
    });
});

module.exports = router;