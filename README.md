# Blog Post App 
- MERN Stack

```
import React, { useState } from "react";
import "../styles/CreatePost.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const CreatePost = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    description: "",
  });
  const handleInput = (event) => {
    const { name, value } = event.target;

    setPost((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      /** axios */
      const res = await axios.post("/create", post);
      console.log(res);
      navigate("/posts");
    } catch (err) {
      console.log(err);
    }
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
  });

  return (
    <div className="post-wrapper">
      <h1>Blog Page</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            name="title"
            type="text"
            value={post.title}
            placeholder="Title"
            onChange={handleInput}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            className="h-30"
            type="text"
            value={post.description}
            placeholder="Description"
            onChange={handleInput}
            required
          />
        </Form.Group>
        <Button
          variant="outline-success"
          type="submit"
          className="mb-2 w-100"
          onClick={handleSubmit}
        >
          Create
        </Button>
      </Form>
      <Button
        type="submit"
        variant="outline-dark"
        className="w-100"
        onClick={() => navigate(-1)}
      >
        BACK
      </Button>
    </div>
  );
};

export default CreatePost;
```

- PostCards
```
import React from "react";
import "../styles/PostCard.css";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
const PostCard = (props) => {
  const { title, description, deletePost } = props;

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (confirmDelete) {
      deletePost();
    } 
  };

  return (
    <div className="post-card">
      <h3 className="post-card__title">{title}</h3>
      <p className="post-card__description">{description}</p>
      <Link to="#" onClick={handleDelete}>
        <AiOutlineDelete color="black" size="20px" />
      </Link>
    </div>
  );
};

export default PostCard;
```