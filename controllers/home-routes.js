const router = require('express').Router();
const { Blog } = require('../models');
const withAuth = require('../utils/auth');

//GET all blogs for homepage
router.get('/', withAuth, async (req, res) => {
    try{
        const dbBlogData = await Blog.findAll();

        const blogs = dbBlogData.map((blog) => 
            blog.get({ plain: true })
        );

            res.render('homepage', {
                blogs,
                loggedIn: req.session.loggedIn,
            });
        } catch (err){
        console.log(err);
        res.status(500).json(err);
    }
});

//GET one blog for homepage
router.get('/blog/:id', withAuth, async (req, res) => {
    try {
        const dbBlogData = await Blog.findByPk(req.params.id);

        const blog = dbBlogData.get({ plain: true});
        res.render('blog', {
            blog,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;