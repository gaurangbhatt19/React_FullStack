const express= require('express')
const bodyParser= require('body-parser')
const jsonData=require('./data.js')
const app=express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
const articlesInfo={
    'learn-react':{
      upvotes:0,
      comments:[]
    },
    'learn-node':{
      upvotes:0,
      comments:[]
    },
    'my-thoughts-on-resumes':{
      upvotes:0,
      comments:[]
    }
}

app.get("/article/:article_name",(req,res)=>{
    const articleName=req.params.article_name
    const article=articlesInfo[articleName]
    res.send(article)
})

app.post("/article/:article_name/upvote",(req,res)=>{
    const article=req.params.article_name
    articlesInfo[article].upvotes++
    res.send(`Article ${article} has Upvotes ${articlesInfo[article].upvotes}`)
})

app.post("/article/:article_name/comment",(req,res)=>{
   const {username,comment}=req.body
   const article_name=req.params.article_name
   articlesInfo[article_name].comments.push({username:username,comment:comment})
   res.send("Comment Added")
   
})


app.listen(8000)