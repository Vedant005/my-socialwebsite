import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:"Beautifull scenary",
   
    profile:"https://api.dicebear.com/7.x/adventurer/svg?seed=Cuddles",
    likes: {
      likeCount: 100,
      likedBy: [],
      dislikedBy: [],
    },
    imgUrl : 'https://picsum.photos/id/13/600/300',

    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    
    content:"My first post!",
    profile:"https://robohash.org/man",
    imgUrl : 'https://picsum.photos/id/30/600/300',

    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Illuminati",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    
    
    content:"My first post!",
    profile:"https://xsgames.co/randomusers/avatar.php?g=pixel",

    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Illuminati",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    
    content:"Working!!!",
    profile:"https://api.dicebear.com/7.x/thumbs/svg?seed=Bandit"    ,
    imgUrl:"https://picsum.photos/id/1/600/300",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Illuminati",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    
    content:"My first post!",
    profile:"https://api.dicebear.com/7.x/notionists-neutral/svg?seed=George",
    imgUrl : 'https://picsum.photos/id/38/600/300',

    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Illuminati",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    
    content:"My first post!",
    profile:"https://api.dicebear.com/7.x/notionists/svg?seed=Gizmo",
    imgUrl : 'https://picsum.photos/id/43/600/300',

    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Illuminati",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    
    content:"My first post!",
    profile:"https://api.dicebear.com/7.x/micah/svg?seed=Maggie",
 
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Illuminati",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

];
