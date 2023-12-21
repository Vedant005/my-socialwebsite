import Header from "../components/Header"
import LeftSidebar from "../components/LeftSidebar"
import RightSidebar from "../components/RIghtSidebar"
import "./Home.css"
import LandingPage from "../components/LandingPage"
import { usePost } from "../contexts/postContext"
// import { useBook } from "../contexts/BookmarkContext"

export default  function Home(){
    const {post}=usePost();
    // const {addToBook}= useBook();
    return(
            <div>
            <div className="header">
            <Header/>
           </div>
        <div className="grid-container">
         <div className="left-side-grid">
           <LeftSidebar/>
        </div>  
         <div className="home-content-grid">
           {post.map((info)=>{
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