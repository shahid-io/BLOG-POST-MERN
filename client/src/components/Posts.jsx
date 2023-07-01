import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "./PostCard";
import { useNavigate } from "react-router-dom";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("/posts");
        const postsData = response.data;
        setPosts(postsData);
      } catch (error) {
        console.log("Error while fetching posts");
      }
    };
    fetchPosts();
  }, []);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/posts/${id}`);
      setPosts(posts.filter((post) => post._id !== id));
    } catch (error) {
      console.log("Error while deleting post");
    }
  };

  return (
    <div className="post-container text-center container">
      <div className="card p-3">
        {posts.map((post) => (
          <PostCard
            key={posts._id}
            title={post.title}
            description={post.description}
            deletePost={() => handleDelete(post._id)}
          ></PostCard>
        ))}
        <button
          onClick={() => navigate(-1)}
          className="btn btn-outline-warning"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Posts;
