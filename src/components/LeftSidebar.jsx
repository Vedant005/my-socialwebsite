
import { NavLink } from "react-router-dom"
import MyModal from "../components/ShowModal"
import { useState } from "react"

export default function LeftSidebar(){
    // const [showModal, setShowModal] = useState(false);

    // const closeModal = () => setShowModal(false);
  
    // const handleCloseButton = (
    //   <button className="model-btn" onClick={closeModal}>
    //     Accept It
    //   </button>
    // );
  
    // const mainModal = (
    //   <MyModal closeModal={closeModal} handleCloseButton={handleCloseButton}>
    //     <h2>STAY TUNED</h2>
    //     <p>
    //       Subscribe to our newsletter and never miss our designs ,latest news.etc.
    //       Our newsletter is sent once a week, every Monday
    //     </p>
    //   </MyModal>
    // );

    return(
        <div>
             <NavLink to ="/"className="home" >
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
            {/* <hr/>
            <p className="bookmark" onClick={() => setShowModal(true)}>
               Add post 
           </p>
           {showModal && mainModal} */}
            <hr/>
            <NavLink to = "/login" className="logout">
                Logout
            </NavLink>
        </div>
    )
}