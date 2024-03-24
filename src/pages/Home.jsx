import Header from "../components/Header"
import LeftSidebar from "../components/LeftSidebar"
import RightSidebar from "../components/RIghtSidebar"
import "./Home.css"
import LandingPage from "../components/LandingPage"
import { usePost } from "../contexts/postContext"
import { FaRegImage } from "react-icons/fa";
import { useState } from "react"


export default  function Home(){
  
    const {post}=usePost();
    // const {addToBook}= useBook();
    const  [info,setInfo] = useState(post);
    const [newPost,setNewPost]= useState();

      //  const handleNew=(e)=> {
      //    setInfo(...info,{
      //     content:newPost

      //    })
       
       console.log(post)
    return(
         <div>
            
            <Header/>
         
        <div className="flex-container">
         <div className="left-side-grid">
           <LeftSidebar/>
        </div>  
         <div className="home-content-grid">
          <div className="newPost">
            <div className="textarea">
         <textarea id="w3review" className="addPost" rows="8" cols="50" placeholder="Share your thoughts!!" onInput={(event) => setNewPost(event.target.value)}/>
       
     
        </div>
        <div className="post-btn">
        <FaRegImage/>
        <button className="post-btn" >Post </button>
        </div>
        </div>
           {info.map((info)=>{
            return(
              <LandingPage showPost={info}/> 

            )
           })}
         </div>
         <div className="right-side-grid">
          <RightSidebar/>
         </div>
         
        </div>

        </div>
    )
}