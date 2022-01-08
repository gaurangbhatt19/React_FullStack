const express= require('express')
const bodyParser= require('body-parser')
const jsonData=require('./data.js')
const app=express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.get("/article/:article_name",(req,res)=>{
    const articleName=req.params.article_name
    const article=jsonData.find(i=>i.name===articleName)
    res.send(article)

})
app.post("/",(req,res)=>{
    res.send(req.body.name)
})

app.listen(8000)