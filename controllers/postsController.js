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

// Find a post by id
exports.findOnePost = async (req, res) => {
    const id = req.params.id;

    try {
        const postById = await Post.findByPk(id);
        
        (postById) ? res.send(postById) : res.send('Post with id=' + id + ' not found') ;
    } catch (err) {
        res.send('Error retrieving post with id=' + id);   
    }
};

exports.updatePost = async (req, res) => {
    try {
        const postById = await Post.update(req.body, {
            where: { id: req.params.id }
        });
        res.send('Post was updated successfully.');
    } catch (err) {
        res.send(err.message || `Cannot update post with id=${id}. Maybe post was not found or req.body is empty!`);
    }
}