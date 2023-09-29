const express = require('express')
const { AllBlogs } = require('../Controllers/AllBlogs_Stats')
const { SearchBlogsUsingParams } = require('../Controllers/QueriesBlogs_Search')
const BlogRouter = express.Router()

BlogRouter.get('/blog-stats', AllBlogs)
BlogRouter.get('/blog-search', SearchBlogsUsingParams)

module.exports = BlogRouter