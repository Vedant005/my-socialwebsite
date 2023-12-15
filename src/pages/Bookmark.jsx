import LeftSidebar from "../components/LeftSidebar"
import { useBook } from "../contexts/BookmarkContext"
import "./Bookmark.css"

export default function Bookmark(){
  const {mark,addToBook}= useBook();
  console.log(mark);
  
  return(
      
        <div>
            <h1>CHOSEN ONES!</h1>
           
      <div className=" main-content">
         <div className="left-side-grid">
        <LeftSidebar/>
         </div> 
         <div>
            {mark.map((showPost)=>{
                 
                 return(
                    <div className="main-div">
                            <div className="main-post" key={showPost._id}>
                                <h1>{showPost.username}</h1>
                                 <p>
                                    {showPost.content}
                                 </p>

                                </div>

                        </div>
                 )
            })

            }
            </div>

         </div>
        </div>
    )
}