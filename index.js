const cors = require('cors')
const express = require('express')
const BlogRouter = require('./Router/Blog_Router')
require("dotenv").config()
const App = express()

App.use('/api', BlogRouter)

App.listen(process.env.PORT, () => {
    console.log(`server is running on Port ${process.env.PORT} `)
})