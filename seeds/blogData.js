const { Blog } = require('../models');

const blogdata = [
    {
        title: '',
        contents: '',
        username: '',
        date_created: '',
    },
    {
        title: '',
        contents: '',
        username: '',
        date_created: '',
    },
    {
        title: '',
        contents: '',
        username: '',
        date_created: '',
    },
    {
        title: '',
        contents: '',
        username: '',
        date_created: '',
    },
];

const seedBlogs = () => Blog.bulkCreate(blogdata);

module.exports = seedBlogs;