
const express = require('express')
const app = express()

const {  pageLanding,pageStudy,pageGiveClasses,saveClasses } = require('./pages')

const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express:app,
    noCache:true,
})



app
.use(express.urlencoded({ extended:true }))

.use(express.static("public"))
.get("/",pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)
