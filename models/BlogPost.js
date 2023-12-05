const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String
    },
    description: {
        type: String,
        required: true,
    },
    keywords: {
        type: [String],
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    user_id: { 
        type: String, 
        required: true,
        unique:false
     }

});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;
