const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//GET routes
router.get('/', async (req,res) => {
    const posts = await Post.find();
    res.json(posts);
});

//create new post
router.post('/new', async (req, res) => {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    res.json(savedPost);
});

//GET contact
router.get('/get/:id', async (req, res) => {
    const a = await Post.findById({_id:req.params.id});
    res.json(a);
});

//DELETE contact
router.delete('/delete/:id', async (req, res) => {
    const result = await Post.findByIdAndDelete({_id:req.params.id});
    res.json(result);
});

//UPDATE contact
router.patch('/update/:id', async (req, res) => {
    const patch = await Post.updateOne({_id:req.params.body});
    res.json(patch);
});

module.exports = router;