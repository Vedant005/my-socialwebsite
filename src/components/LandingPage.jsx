import React, { useState } from "react";
import { useBook } from "../contexts/BookmarkContext";
import { FaRegComment, FaRegHeart, FaHeart } from "react-icons/fa";
import { TbBookmark } from "react-icons/tb";

function LandingPage({ showPost }) {
  const { addToBook } = useBook();

  const { _id, content, username, imgUrl, profile, likes } = showPost;
  const likesCount = likes.likeCount;

  const [isLiked, setIsLiked] = useState(false);
  const [like, setLike] = useState(likesCount);

  const handleLike = () => {
    if (isLiked) {
      setLike(like - 1);
      setIsLiked(false);
    } else {
      setLike(like + 1);
      setIsLiked(true);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-4">
        <div className="flex items-center mb-4">
          <img
            className="w-10 h-10 rounded-full mr-3"
            src={profile}
            alt={username}
          />
          <p className="font-semibold text-gray-800">{username}</p>
        </div>

        {imgUrl && (
          <img
            className="w-full h-64 object-cover mb-4 rounded"
            src={imgUrl}
            alt="Post"
          />
        )}

        <p className="text-gray-700 mb-4">{content}</p>

        <div className="flex items-center justify-between text-gray-500">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-1 ${
                isLiked ? "text-red-500" : "hover:text-red-500"
              }`}
            >
              {isLiked ? <FaHeart /> : <FaRegHeart />}
              <span>{like}</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-blue-500">
              <FaRegComment />
              <span>Comment</span>
            </button>
          </div>
          <button
            onClick={() => addToBook(showPost)}
            className="hover:text-yellow-500"
          >
            <TbBookmark size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
