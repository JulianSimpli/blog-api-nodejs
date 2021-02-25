const Post = require('../models/Post');

exports.create = async (req, res, next) => {
    const newPost = {
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        category: req.body.category
    };

    try {
        const addpost = await Post.create(newPost);

        res.send('Post was created successfully.');
        next();
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

        (postById) ? res.send('Post was updated successfully.') : res.send('Post with id=' + id + ' not found') ;
    } catch (err) {
        res.send(err.message || `Cannot update post with id=${id}. Maybe post was not found or req.body is empty!`);
    }
}

exports.deletePost = async (req, res) => {
    try {
        const postById = await Post.destroy({
            where: { id: req.params.id }
        });

        (postById) ? res.send('Post was deleted successfully.') : res.send('Post with id=' + id + ' not found') ;
    } catch (err) {
        res.send(err.message || `Cannot delete post with id=${id}. Maybe post was not found!`);
    }
};