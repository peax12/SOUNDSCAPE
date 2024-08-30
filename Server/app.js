const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();


const postRoute = require('./routes/posts');


app.use(bodyparser.json());
app.use(cors())

app.use("/posts",postRoute);
app.use("/posts/genre",postRoute);
app.use('/posts/album',postRoute);
app.use('/posts/song',postRoute)
app.use('/posts/createuser',postRoute);
app.use('/artists',postRoute);
app.use ('/album',postRoute);
app.use('artists/:id',postRoute)





module.exports = app;
