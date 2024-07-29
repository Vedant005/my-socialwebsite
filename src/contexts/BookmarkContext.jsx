import React, { createContext, useContext, useState } from "react";

export const BookmarkContext = createContext();

function BookmarkProvider({ children }) {
  const [mark, setMark] = useState([]);

  const addToBook = (content) => {
    setMark([...mark, content]);
  };

  const removeFromBook = (id) => {
    setMark(mark.filter((item) => item._id !== id));
  };

  return (
    <BookmarkContext.Provider value={{ mark, addToBook, removeFromBook }}>
      {children}
    </BookmarkContext.Provider>
  );
}

const useBook = () => useContext(BookmarkContext);

export { useBook, BookmarkProvider };
export default BookmarkContext;
