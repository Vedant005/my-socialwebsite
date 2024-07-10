import Header from "../components/Header";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RIghtSidebar";
import LandingPage from "../components/LandingPage";
import { usePost } from "../contexts/postContext";
import { FaRegImage, FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Home() {
  const { post } = usePost();
  const [info, setInfo] = useState(post);
  const [newPost, setNewPost] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-red-100">
      <Header />

      {/* Mobile sidebar toggle button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-purple-500 text-white p-2 rounded-full shadow-lg"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col lg:flex-row lg:space-x-4">
          {/* Left Sidebar */}
          <div
            className={`${
              showSidebar ? "block" : "hidden"
            } lg:block lg:w-1/5 mb-4 lg:mb-0`}
          >
            <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-4 sticky top-4">
              <h2 className="text-lg font-semibold mb-3 text-center text-purple-600">
                Menu
              </h2>
              <LeftSidebar />
            </div>
          </div>

          {/* Main Content */}
          <main className="lg:w-3/5 space-y-4">
            <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-4">
              <textarea
                id="newPost"
                className="w-full p-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                rows="3"
                placeholder="What's on your mind?"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
              />
              <div className="flex items-center justify-between mt-2">
                <button className="text-purple-500 hover:text-purple-600 transition-colors">
                  <FaRegImage className="text-xl" />
                </button>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors text-sm">
                  Post
                </button>
              </div>
            </div>
            {info.map((post, index) => (
              <LandingPage key={index} showPost={post} />
            ))}
          </main>

          {/* Right Sidebar */}
          <div
            className={`${
              showSidebar ? "block" : "hidden"
            } lg:block lg:w-1/5 mt-4 lg:mt-0`}
          >
            <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-4 sticky top-4">
              <h2 className="text-lg font-semibold mb-3 text-center text-pink-600">
                Trending
              </h2>
              <RightSidebar />
            </div>
          </div>
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
