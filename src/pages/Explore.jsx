
import { usePost } from "../contexts/postContext"
import LeftSidebar from "../components/LeftSidebar";
import { useBook } from "../contexts/BookmarkContext";

import { FaRegComment } from "react-icons/fa";
import { TbBookmark } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import "./Explore.css";



// import "./Home.css"
export default function Explore(){
     const {post}=usePost();
     const {addToBook} = useBook();    
    
    return(
        <div>
        <h1>All the content</h1>
        <div className="explore-container">
           
            <div className="left-side-grid">
           <LeftSidebar/>
            </div>
            <div className="explore-posts"> 
            {post.map((info)=>{
              const{_id,profile,username,imgUrl,content} = info;
        // <div className="post-container" key={_id}>
        //    <div className="post-top-container">
        //     <div className="user-profile">
        //        <img className="profile-img" src={profile} alt='img'/>
        //     </div>
        //     <div className='username'>
        //     <p>{username}</p>
        //     </div>
          
        //    </div>
        //    <div className='content-container'>
        //     <div className='post-image'>
        //     <img className='post-image' src={img} alt='img'/>
        //     </div>
        //    <div className='post-content'>
        //    <p>
        //     {content}
        //     </p>
        //    </div>
        //    </div>

        //     <div className='likes-marks'>
        //      <div className='likes'>
        //       <div>
        //      <FaRegHeart/>
        //      </div>
        //      <div>
        //     <FaRegComment className="comment-icon"/>
        //     </div>
        //    </div>

        // <div>
        //     <TbBookmark onClick={()=>addToBook(info)}/>
        //      </div>
             
        // </div>

        //  </div>
            return(
            
        <div className="post-container" key={_id}>
        <div className="post-top-container">
         <div className="user-profile">
            <img className="profile-img" src={profile} alt='img'/>
         </div>
         <div className='username'>
         <p>{username}</p>
         </div>
       
        </div>
        <div className='content-container'>
         <div className='post-image'>
         <img className='post-image' src={imgUrl} alt='img'/>
         </div>
        <div className='post-content'>
        <p>
         {content}
         </p>
        </div>
        </div>

         <div className='likes-marks'>
          <div className='likes'>
           <div>
          <FaRegHeart/>
          </div>
          <div>
         <FaRegComment className="comment-icon"/>
         </div>
        </div>

     <div>
         <TbBookmark onClick={()=>addToBook(info)}/>
          </div>
          
     </div>

     </div>
     
            )
            })}
          </div> 
          <hr/>
                
            </div>
            </div>
            
       
    )
}