const express = require('express')
// var exphbs = require('express-handlebars'); this is also old version
const exphbs = require('express-handlebars').create();
const path = require('path')
const app = express()
const port = 4000
// app.engine('handlebars', exphbs()); this two lines are old version
// app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname,"static")))
app.use('/',require(path.join(__dirname,'routes/blog.js')))
app.listen(port,()=>{
    console.log(`My Server Is running on http://localhost:${port}`)
})