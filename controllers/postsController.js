const Post = require('../models/Post');

exports.create = async (req, res) => {
    
    // Create a post
    const newPost = {
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        category: req.body.category
    };

    // Save post in the database
    try {
        const addpost = await Post.create(newPost);
        res.redirect('/');
    } catch (err) {
        res.send(err.message || 'Some error occurred while creating the post.');
    }

}