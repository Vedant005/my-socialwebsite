
import { usePost } from "../contexts/postContext"
import LeftSidebar from "../components/LeftSidebar";
import "./Explore.css"
import "./Home.css"
export default function Explore(){
     const {post}=usePost();
    
    return(
        <div>
        <h1>All the content</h1>
        <div className="explore-container">
           
            <div className="left-side-grid">
           <LeftSidebar/>
            </div> 
            {post.map((info)=>{
            return(
            <div className="home-posts">
                <div className="img-grid">
                 <img className="img" src={info.img}/>
                 </div>
                 <div className="content-grid">
                <h3>{info.username}</h3>
               
                <p>{info.content}</p>
                 </div>
                
            </div>
            )
            })}
        
                
            </div>
            </div>
            
       
    )
}