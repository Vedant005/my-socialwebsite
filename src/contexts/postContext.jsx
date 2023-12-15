import { Children, createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const PostContext = createContext();

 function PostProvider({children}) {

    const[post,setPost]=useState([]);
    const [bookmark,setBookmark]=useState({});
    
     const fetchPost =async()=>{
        try{
        const res = await axios.get("/api/posts")
        const data =await res.data;
         setPost(data.posts);
        }
        catch(e){
            console.log(e)
        }

     }
   //   const inBookmark = async()=>{
   //    try{
   //          const response = await axios.get(`api/users/bookmarks`)
   //    }catch(e){
   //       console.log(e);
   //    }
   //   }
      const addBookmark= async(postId)=>{
          try{
             const res = await axios.get(`api/users/bookmarks/${postId}`)
              return res;
          }catch(e){
            console.log(e);
          }
      }


     useEffect(()=>{
        fetchPost();
      //   inBookmark();
     },[])

     return(
        <PostContext.Provider value ={{post,setPost,addBookmark}}>
            {children}
        </PostContext.Provider>
     )

     }
     const usePost=()=>useContext(PostContext);
     export{PostProvider,usePost}
 
