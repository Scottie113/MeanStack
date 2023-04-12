const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const mongoose = require('mongoose')

const PostModel = require('./Models/post')

mongoose.connect("mongodb+srv://sdm6f8:Password123@cluster0.exunqmx.mongodb.net/node-angular?retryWrites=true&w=majority")
.then(()=>{
  console.log('Connected to database')
})
.catch(()=>{
  console.log('connection error')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

// disable CORS
app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods",
  "GET, POST, PATCH, DELETE, OPTIONS"
  );
  console.log('Middleware');
  next();
})

app.use((req, res, next)=>{

  next();
})
// Password123
app.post("/api/posts",(req,res,next)=>{
  const post = new PostModel({
    title: req.body.title,
    content: req.body.content
  })
  post.save().then(createPost=> {
    res.status(201).json({
      message:'Post added successful',
      postId: createPost._id
    });
  })


})

app.get('/api/posts',(req,res,next)=>{
  PostModel.find().then(documents =>{
    res.status(200).json({
      message:"This is fetched data",
      posts: documents
    });
  });

});

app.delete("/api/posts/:id", (req,res,next)=>{
 PostModel.deleteOne({_id:req.params.id}).then(result =>{
  console.log(result)
  res.status(200).json({message:"Post deleted"})
 })

})


module.exports = app;
