import React, { useState } from "react";
import "../styles/CreatePost.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

  /** useEffect for debug */
  //   useEffect(() => {
  //     console.log(post);
  //   }, [post]);
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
