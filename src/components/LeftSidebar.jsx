
import { NavLink } from "react-router-dom"
export default function LeftSidebar(){
     

    return(
        <div>
             <NavLink to ="/"className="home">
               Home
            </NavLink>
            <hr></hr>
            <NavLink to ="/explore"className="explore">
               Explore
            </NavLink>
            <hr/>
        <NavLink to ="/bookmark"className="bookmark">
               Bookmark
            </NavLink>
            <hr/>
            <NavLink to = "/login" className="logout">
                Logout
            </NavLink>
        </div>
    )
}