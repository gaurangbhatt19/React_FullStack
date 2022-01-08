import React from 'react'
import ArticlesData from './ArticlesData.jsx'
import articlesContent from './data.js'
const ArticleLists = () => {
    return (
        <>
        <h2>Articles</h2>
        <ArticlesData articlesContent={articlesContent}/>
        </>
    )
}
export default ArticleLists