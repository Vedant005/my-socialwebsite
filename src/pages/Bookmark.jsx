import React, { useState } from "react";
import LeftSidebar from "../components/LeftSidebar";
import { useBook } from "../contexts/BookmarkContext";
import { FaRegComment, FaRegHeart, FaBars } from "react-icons/fa";
import { TbBookmarkOff } from "react-icons/tb";

export default function Bookmark() {
  const { mark, removeFromBook } = useBook();
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-red-100">
      {/* Mobile sidebar toggle button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-purple-500 text-white p-2 rounded-full shadow-lg"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-center text-purple-600 mb-8">
          CHOSEN ONES!
        </h1>
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Left Sidebar */}
          <div
            className={`${
              showSidebar ? "block" : "hidden"
            } lg:block lg:w-1/4 mb-8 lg:mb-0`}
          >
            <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 sticky top-8">
              <h2 className="text-xl font-semibold mb-4 text-center text-purple-600">
                Menu
              </h2>
              <LeftSidebar />
            </div>
          </div>

          {/* Main Content */}
          <main className="lg:w-3/4 space-y-8">
            {mark.map((showPost) => (
              <div
                key={showPost._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-4">
                  <div className="flex items-center mb-4">
                    <img
                      className="w-10 h-10 rounded-full mr-3"
                      src={showPost.profile}
                      alt={showPost.username}
                    />
                    <p className="font-semibold text-gray-800">
                      {showPost.username}
                    </p>
                  </div>

                  {showPost.imgUrl && (
                    <img
                      className="w-full h-64 object-cover mb-4 rounded"
                      src={showPost.imgUrl}
                      alt="Post"
                    />
                  )}

                  <p className="text-gray-700 mb-4">{showPost.content}</p>

                  <div className="flex items-center justify-between text-gray-500">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 hover:text-red-500">
                        <FaRegHeart />
                        <span>Like</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-blue-500">
                        <FaRegComment />
                        <span>Comment</span>
                      </button>
                    </div>
                    <button
                      className="hover:text-yellow-500"
                      onClick={() => removeFromBook(showPost._id)}
                    >
                      <TbBookmarkOff size={20} />
                      <span className="ml-1">Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>

      {/* Overlay for mobile */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}
