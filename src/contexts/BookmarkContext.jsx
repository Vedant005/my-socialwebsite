import React, { createContext, useContext, useState } from 'react'


 export const BookmarkContext=createContext();

  

    
function BookmarkProvider({children}) {

    const[mark,setmark]=useState([]);
    const addToBook= (content) => {         
    setmark([...mark, content]);

}

  return (
    <BookmarkContext.Provider value ={{mark,addToBook}}>
            {children}
        </BookmarkContext.Provider>
  )
} 

const useBook =()=> useContext(BookmarkContext);

export{useBook,BookmarkProvider}
export default BookmarkContext