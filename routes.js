const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const uuid = require('uuid'); // Import uuid library

const User = require('./models/User');
const BlogPost = require('./models/BlogPost');

// Route to create a new user
router.post('/api/createuser', async (req, res) => {
  try {
    const { userName, email, password, mobile } = req.body;

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Generate a unique user_id using uuid
    const user_id = uuid.v4();

    const user = new User({ userName, email, password: hashedPassword, mobile, user_id });
    await user.save();
    res.json({ success: true, message: 'User created successfully', user_id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Route to login user
router.post('/api/loginuser', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      // User not found
      return res.json({ success: false, message: 'Invalid email or password' });
    }

    // Compare hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      // Passwords match, user is authenticated
      res.json({ success: true, message: 'Login successful', user_id: user.user_id });
    } else {
      // Passwords don't match
      res.json({ success: false, message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

router.post('/api/createblogpost', async (req, res) => {
  try {
    const { title, image, description, keywords, content,user_id } = req.body;

    // Create a new blog post
    const newBlogPost = new BlogPost({
      title,
      image,
      description,
      keywords,
      content,
      user_id
    });

    // Save the blog post to MongoDB
    await newBlogPost.save();

    res.json({ success: true, message: 'Blog post created successfully!' });
  } catch (error) {
    console.error('Error saving blog post:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

module.exports = router;
