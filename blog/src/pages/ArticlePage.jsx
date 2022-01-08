import React from 'react'
import {useParams} from 'react-router-dom'
import ArticlesData from './ArticlesData.jsx'
import articlesContent from './data.js'
const ArticlePage = () => {
    const params= useParams()
const articleData=articlesContent.find(i=>i.name.trim()===params.name.trim())

    var articles=articlesContent.filter(i=>i.name!==params.name)
    return (
        <>
       <h2>{articleData.title}</h2>
       <p>{articleData.content}</p>
       
       <h2>Other Articles</h2>
       <ArticlesData articlesContent={articles} />
       </>
    )
}

export default ArticlePage
