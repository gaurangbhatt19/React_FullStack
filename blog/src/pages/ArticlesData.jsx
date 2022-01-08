import React from 'react'
import { Link } from 'react-router-dom'
const ArticlesData = ({articlesContent}) => {
    return (
       <>
        <ul> 
      {articlesContent.map((i,index)=>(
      <Link to={"/article/"+String(i.name)} className="article-list-item">
          <h4  key={index}>{i.title}</h4>
          <p key={index}>{i.content[0].substring(0,100)}</p>
      </Link>
      ))} </ul>
       
       </>
    )
}

export default ArticlesData
