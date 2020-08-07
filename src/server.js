// server
const express = require('express')
const server = express()

const { 
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

// template engine
const nunjucks = require('nunjucks')
// nunjucks config
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// server set and configuration
server
    // receive the req.body data
    .use(express.urlencoded({ extended: true }))
    // static files configuration (css, js, img)
    .use(express.static("public"))
    // application routes
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)
    // server start
    .listen(5000)
    