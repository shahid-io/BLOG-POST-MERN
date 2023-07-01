import React, { useState } from "react";
import "../styles/PostCard.css";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const PostCard = (props) => {
  const { title, description, deletePost, updatePost } = props;
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

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

  const handleUpdate = (values) => {
    updatePost(values);
    setShowUpdateModal(false);
  };

  const handleOpenUpdateModal = () => {
    setShowUpdateModal(true);
  };

  const handleCloseUpdateModal = () => {
    setShowUpdateModal(false);
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
  });

  return (
    <div className="post-card">
      <h3 className="post-card__title">{title}</h3>
      <p className="post-card__description">{description}</p>
      <Link to="#" onClick={handleOpenModal}>
        <AiOutlineDelete color="black" size="20px" />
      </Link>
      <Link to="#" onClick={handleOpenUpdateModal}>
        <FiEdit color="black" size="20px" />
      </Link>

      <Modal show={showModal} onHide={handleCloseModal}>
        {/* Modal content */}
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

      <Modal show={showUpdateModal} onHide={handleCloseUpdateModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Update Post</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Formik
            initialValues={{ title: title, description: description }}
            validationSchema={validationSchema}
            onSubmit={handleUpdate}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="mb-3">
                  <label htmlFor="title">Title</label>
                  <Field
                    type="text"
                    id="title"
                    name="title"
                    className={`form-control ${
                      errors.title && touched.title ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="description">Description</label>
                  <Field
                    as="textarea"
                    id="description"
                    name="description"
                    className={`form-control ${
                      errors.description && touched.description
                        ? "is-invalid"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>

                <Button type="submit" variant="outline-primary">
                  Update
                </Button>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PostCard;
