import React, { useState } from 'react'
import { useBook } from '../contexts/BookmarkContext';
import "./LandingPage.css"
import { FaRegComment } from "react-icons/fa";
import { TbBookmark } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";

function LandingPage({showPost}) {
  const {addToBook} = useBook();  
    
    const {
        _id,
        content,
        username,
        imgUrl,
        profile,
        likes,
    }=showPost;
    const likesCount= likes.likeCount;

    const [isLiked,setIsLiked]=useState(false);
    
    const [like,setLike]= useState(likesCount);

    const handleLikes = ()=>{
 
    setLike(like+1);
    setIsLiked(true);
    

    }

    const handleDisLikes = ()=>{

      setLike(like-1);
      setIsLiked(false);
    }


  return (
    <div>
        
        
        <div className="post-container" key={_id}>
           <div className="post-top-container">
            <div className="user-profile">
               <img className="profile-img" src={profile} alt='img'/>
            </div>
            <div className='username'>
            <p>{username}</p>
            </div>
      
           </div>
           <hr/>
           <div className='content-container'>
            <div className='post-image'>
             {imgUrl ? (
            <img className='post-image' src={imgUrl} alt='img'/>
             ):(
              <p></p>
             )
            }
            </div>
           <div className='post-content'>
           <p>
            {content}
            </p>
           </div>
           </div>
           <hr/>

            <div className='likes-marks'>
             <div className='likes'>
              <div>
             <FaRegHeart onClick={isLiked}/>
             <p>{like}</p>
             </div>
             <div>
            <FaRegComment className="comment-icon"/>
            </div>
           </div>

        <div>
            <TbBookmark onClick={()=>addToBook(showPost)}/>
             </div>
             
        </div>

        </div>
       <hr/>
 

    </div>

  )
}

export default LandingPage