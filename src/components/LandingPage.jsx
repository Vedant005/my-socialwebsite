import React from 'react'
import { useBook } from '../contexts/BookmarkContext';

function LandingPage({showPost}) {
  const {addToBook} = useBook();    
    const {
        _id,
        content,
        username
    }=showPost;
  return (
    <div>
        
        
        <div className="main-container" key={_id}>
            <h1>{username}</h1>
            <p>
            {content}
            </p>
            <button className="bookmark_btn" onClick={()=>addToBook(showPost)}>Bookmark</button>

        </div>



    </div>

  )
}

export default LandingPage