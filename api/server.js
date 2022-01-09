const express= require('express')
const bodyParser= require('body-parser')
const mongodb=require('mongodb').MongoClient
const app=express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get("/article/:article_name",(req,res)=>{
    const articleName=req.params.article_name
    const article=articlesInfo[articleName]
    res.send(article)
})

app.post("/api/article/:article_name/upvote",async (req,res)=>{
    try{

    const article=req.params.article_name
    const client=await mongodb.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false',{useNewUrlParser:true})
    const db=client.db('my_blog')

    let data= await db.collection('articles').findOne({name:article})

    db.collection('articles').updateOne({name:article},{
        "$set":{
            upvotes:data.upvotes+1
        }
    })

    const updatedData=await db.collection('articles').findOne({name:article})

    res.status(200)
    res.json(updatedData)
    client.close()
   }
   catch(err){
       res.status(500)
       res.send(err.message)
       client.close()
   }
})

app.post("/api/article/:name/comment",async(req,res)=>{

try{

   const {username,comment}=req.body
   const article_name=req.params.name

   const client = await mongodb.connect("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false",{useNewUrlParser:true})
   const db = client.db('my_blog') 
   const data= await db.collection('articles').findOne({name:article_name})
   const comments=data.comments

   comments.push({"user":username,"comment":comment})
   await db.collection('articles').updateOne({name:article_name},{
       "$set":{
           comments:comments
       }
   })

   res.status(200)
   res.send("Comment Added")
   client.close()

    }catch(err){
        res.status(500)
        res.send(err.message)
    }
})

app.get("/api/article/:name",async(req,res)=>{
    try{
    const article=req.params.name

    const client=await mongodb.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false',{useNewUrlParser:true})
    const db=client.db('my_blog')

    const articleData= await db.collection('articles').findOne({name:article})

    console.log(articleData)
    res.status(200)
    res.json(articleData)
    client.close()

      }
      catch(err){
          console.log(err)
          res.status(500)
          res.json(err.message)
      }
})


app.listen(8000,()=>{
    console.log("Nodejs Server")
})