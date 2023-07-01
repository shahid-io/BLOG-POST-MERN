import React, { useState } from "react";
import "../styles/PostCard.css";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const PostCard = (props) => {
  const { title, description, deletePost } = props;
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    deletePost();
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="post-card">
      <h3 className="post-card__title">{title}</h3>
      <p className="post-card__description">{description}</p>
      <Link to="#" onClick={handleOpenModal}>
        <AiOutlineDelete color="black" size="20px" />
      </Link>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this post?</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="outline-danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PostCard;
