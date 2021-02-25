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

exports.allPosts = async (req, res) => {
    const posts = await Post.findAll();
    
    let arr = [];
    for (const post in posts) {
        const { id, title, image, category, createdAt } = posts[post];

        arr.push({ id, title, image, category, createdAt });
    }
    
    try {
        res.send(arr.sort( (a, b) => {
            return Date.parse(b.createdAt) - Date.parse(a.createdAt);
        }));
    } catch (err) {
        res.send(err.message || 'Some error occurred while retrieving posts.');
    }
}