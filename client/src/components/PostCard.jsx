import React from "react";
import "../styles/PostCard.css";
const PostCard = (props) => {
  const { title, description } = props;
  return (
    <div className="post-card">
      <h3 className="post-card__title">{title}</h3>
      <p className="post-card__description">{description}</p>
    </div>
  );
};

export default PostCard;
